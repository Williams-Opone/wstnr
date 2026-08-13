// @ts-nocheck
import { NextResponse } from "next/server";
import postgres from "postgres";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const sql = postgres(process.env.DATABASE_URL);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  try {
    // Authenticate signature directly against security configuration secrets
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error(`❌ Webhook signature authentication blocked: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the completed checkout event session
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const itemsRaw = session.metadata?.product_ids;

    if (itemsRaw) {
      try {
        const purchasedItems = JSON.parse(itemsRaw);

        // Deduct inventory rows instantly for every item inside your bundle
        for (const item of purchasedItems) {
          console.log(`Deducting ${item.qty} units from product row: ${item.id}`);
          
          await sql`
            UPDATE product_variants 
            SET stock_quantity = GREATEST(0, stock_quantity - ${item.qty})
            WHERE product_id = ${item.id}
          `;
        }
        console.log("✅ Inventory balances compiled and adjusted flawlessly.");
      } catch (dbErr) {
        console.error("Critical: Failed to adjust inventory counts:", dbErr);
        return new Response("Database fulfillment error", { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}