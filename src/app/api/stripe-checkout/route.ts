import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { cartItems, customerName, customerEmail, customerPhone, shippingAddress } = await req.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Always use a solid origin for local dev
    const origin = "http://localhost:3000";

    const lineItems = cartItems.map((item: any) => {
      // Sanitize image URL – Stripe rejects empty/invalid images
      const productImage =
        item.image && /^https?:\/\//.test(item.image)
          ? item.image
          : "https://placehold.co/600x800?text=WSTNR"; // placeholder

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: productImage ? [productImage] : [],
            metadata: { skuId: item.skuId },
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?canceled=true`,
      metadata: {
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
        cartItems: JSON.stringify(
          cartItems.map((i: any) => ({
            skuId: i.skuId,
            name: i.name,
            price: i.price,
            size: i.size,
            quantity: i.quantity,
            image: i.image || "", // keep original for reference
          }))
        ),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe session error:", error);
    return NextResponse.json({ error: error.message || "Checkout error" }, { status: 500 });
  }
}