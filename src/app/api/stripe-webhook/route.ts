import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getPrismaClient } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const metadata = session.metadata as any;
    const cartItems = JSON.parse(metadata.cartItems || "[]");

    const prisma = getPrismaClient();

    // Create order
    await prisma.order.create({
      data: {
        reference: session.payment_intent as string,
        customerName: metadata.customerName,
        customerEmail: metadata.customerEmail.toLowerCase(),
        customerPhone: metadata.customerPhone || "",
        shippingAddress: metadata.shippingAddress || "",
        totalAmount: session.amount_total! / 100,
        status: "SUCCESSFUL",
        items: {
          create: cartItems.map((item: any) => ({
            productSkuId: item.skuId,
            quantity: item.quantity,
            pricePaid: item.price,
          })),
        },
      },
    });

    // Deduct stock
    for (const item of cartItems) {
      await prisma.productSku.update({
        where: { id: item.skuId },
        data: { stock: { decrement: item.quantity } },
      });
    }
  }

  return NextResponse.json({ received: true });
}