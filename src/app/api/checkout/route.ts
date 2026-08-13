// @ts-nocheck
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { cartItems } = await req.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Bag is empty" }, { status: 400 });
    }

    // Capture host origin dynamically to redirect back smoothly upon loop exits
    const origin = req.headers.get("origin") || "http://localhost:3000";

    // Structure line items for Stripe Checkout
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: { id: item.id }, // Attach item ID to read during webhook execution
        },
        unit_amount: Math.round(item.price * 100), // Stripe calculates strictly in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/shop?success=true`,
      cancel_url: `${origin}/shop?canceled=true`,
      // Pack references securely to inspect when fulfillment fires
      metadata: {
        product_ids: JSON.stringify(cartItems.map((i) => ({ id: i.id, qty: i.quantity }))),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session build configuration failed:", error);
    return NextResponse.json({ error: "Checkout error" }, { status: 500 });
  }
}