"use server";

import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

export async function subscribeNewsletter(email: string) {
  try {
    if (!email || !email.includes("@")) {
      return { ok: false, message: "INVALID EMAIL FORMAT" };
    }

    const cleanEmail = email.trim().toLowerCase();

    const subscriber = await prisma.newsletter.create({
      data: { email: cleanEmail },
    });

    // Send welcome confirmation email
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || "WSTNR <onboarding@resend.dev>";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: fromEmail,
        to: cleanEmail,
        subject: "[ WSTNR // WITNESS LIST CONFIRMED ]",
        text: [
          "WSTNR CONCRETE PROPHETS — NEWSLETTER CONFIRMATION",
          "",
          `Email: ${cleanEmail}`,
          `Status: ACTIVE ON WITNESS LIST`,
          `Registered: ${subscriber.createdAt.toISOString()}`,
          "",
          "YOU ARE NOW ON THE ARCHIVE DISTRIBUTION NODE.",
          "EXPECT ONLY LOW-FREQUENCY, HIGH-VALUE TRANSMISSIONS.",
          "NO COMMERCIAL SPAM. HUMAN-DESK ONLY.",
        ].join("\n"),
      });
    }

    return { ok: true, message: "TRANSMISSION RECEIVED // YOU ARE ON THE WITNESS LIST" };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { ok: true, message: "ALREADY ON LIST // SIGNAL CONFIRMED" };
    }
    console.error("Newsletter subscription error:", error);
    return { ok: false, message: "TRANSMISSION INTERRUPTED // RETRY SIGNAL" };
  }
}

export async function sendBroadcastToSubscribers(subject: string, messageBody: string) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || "WSTNR <onboarding@resend.dev>";

    if (!apiKey) {
      return { ok: false, message: "RESEND API KEY MISSING // BROADCAST ABORTED" };
    }

    const subscribers = await prisma.newsletter.findMany({
      select: { email: true },
      orderBy: { createdAt: "asc" },
    });

    if (subscribers.length === 0) {
      return { ok: false, message: "NO SUBSCRIBERS FOUND // BROADCAST VOID" };
    }

    const resend = new Resend(apiKey);

    // Send batch (Resend supports multiple recipients via BCC or individual sends)
    // For reliability with Resend free tier, we send individually in sequence
    for (const sub of subscribers) {
      await resend.emails.send({
        from: fromEmail,
        to: sub.email,
        replyTo: fromEmail,
        subject: `[ WSTNR BROADCAST ] ${subject}`,
        text: [
          "WSTNR CONCRETE PROPHETS — ARCHIVE BROADCAST",
          "",
          messageBody,
          "",
          `Sent to: ${sub.email}`,
          `Distribution list size: ${subscribers.length}`,
          `Broadcast timestamp: ${new Date().toISOString()}`,
          "",
          "UNSUBSCRIBE OR MANAGE STATUS VIA DIRECT CHANNEL.",
          "THIS MESSAGE IS CLASSIFIED // NON-TRANSACTIONAL",
        ].join("\n"),
      });
    }

    return { ok: true, message: `BROADCAST COMPLETE // ${subscribers.length} RECIPIENTS` };
  } catch (error: any) {
    console.error("Broadcast error:", error);
    return { ok: false, message: error.message || "BROADCAST TRANSMISSION FAULT" };
  }
}