"use server";

import { Resend } from "resend";
import { getPrismaClient } from "@/lib/prisma";

export interface CheckoutData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  cartItems: {
    skuId: string;
    name: string;
    price: number;
    size: string;
    quantity: number;
    image: string;
  }[];
  totalAmount: number;
  paymentReference: string;
  provider: "stripe" | "paystack";
}

async function verifyPaystackTransaction(reference: string) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    throw new Error("PAYSTACK_SECRET_KEY is missing in .env");
  }

  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
  });

  const data = await response.json();

  if (!data.status || data.data.status !== "success") {
    throw new Error(`PAYSTACK VERIFICATION FAILED: ${data.message || "Transaction not successful"}`);
  }

  return data.data; // verified transaction data
}

export async function finalizeCheckout(data: CheckoutData) {
  try {
    const prisma = getPrismaClient();

    // For Paystack, verify transaction first
    if (data.provider === "paystack") {
      await verifyPaystackTransaction(data.paymentReference);
    }

    // Create order with items
    const order = await prisma.order.create({
      data: {
        reference: data.paymentReference,
        customerName: data.customerName,
        customerEmail: data.customerEmail.toLowerCase(),
        customerPhone: data.customerPhone,
        shippingAddress: data.shippingAddress,
        totalAmount: data.totalAmount,
        status: "SUCCESSFUL",
        items: {
          create: data.cartItems.map((item) => ({
            productSkuId: item.skuId,
            quantity: item.quantity,
            pricePaid: item.price,
          })),
        },
      },
      include: { items: true },
    });

    // Deduct stock for each SKU
    for (const item of data.cartItems) {
      await prisma.productSku.update({
        where: { id: item.skuId },
        data: { stock: { decrement: item.quantity } },
      });
    }

    // Send confirmation email (optional)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: process.env.ORDER_FROM_EMAIL || "WSTNR Orders <orders@resend.dev>",
        to: data.customerEmail,
        replyTo: process.env.ORDER_FROM_EMAIL || "WSTNR Orders <orders@resend.dev>",
        subject: `[WSTNR // ORDER CONFIRMED] ${data.paymentReference}`,
        text: [
          "WSTNR CONCRETE PROPHETS — ORDER CONFIRMATION",
          "",
          `Reference: ${data.paymentReference}`,
          `Name: ${data.customerName}`,
          `Email: ${data.customerEmail}`,
          `Phone: ${data.customerPhone}`,
          `Address: ${data.shippingAddress}`,
          `Total: $${data.totalAmount}.00`,
          "",
          "MANIFEST:",
          ...data.cartItems.map(
            (i) => `- ${i.name} (Size: ${i.size}) x${i.quantity} @ $${i.price} = $${i.price * i.quantity}`
          ),
          "",
          "INVENTORY EXTRACTION HAS BEEN RECORDED. NO RESTOCK ON LIMITED BATCHES.",
        ].join("\n"),
      });
    }

    return { ok: true, orderId: order.id, reference: data.paymentReference };
  } catch (error: any) {
    console.error("Checkout finalization failed:", error);
    return { ok: false, error: error.message || "Checkout execution fault" };
  }
}