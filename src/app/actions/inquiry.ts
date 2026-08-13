"use server";

import { Resend } from "resend";
import { getPrismaClient } from "@/lib/prisma";

export type InquiryPayload = {
  name: string;
  email: string;
  inquiryType: "order" | "collab" | "press" | "general";
  message: string;
};

const TYPE_MAP = {
  order: "ORDER",
  collab: "COLLAB",
  press: "PRESS",
  general: "GENERAL",
} as const;

export async function submitInquiry(data: InquiryPayload) {
  const name = data.name?.trim();
  const email = data.email?.trim().toLowerCase();
  const message = data.message?.trim();
  const inquiryType = data.inquiryType;

  if (!name || !email || !message) {
    return { ok: false as const, error: "Missing required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Invalid email." };
  }

  if (!TYPE_MAP[inquiryType]) {
    return { ok: false as const, error: "Invalid inquiry class." };
  }

  try {
    const prisma = getPrismaClient();

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        message,
        inquiryType: TYPE_MAP[inquiryType],
      },
    });

    // Email is best-effort — DB save still counts as success
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL;
    const from = process.env.INQUIRY_FROM_EMAIL ?? "WSTNR Desk <onboarding@resend.dev>";

    if (apiKey && to) {
      const resend = new Resend(apiKey);
      const typeLabel = inquiryType.toUpperCase();

      await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `[WSTNR INQUIRY // ${typeLabel}] ${name}`,
        text: [
          "WSTNR / CONCRETE PROPHETS — NEW DESK SIGNAL",
          "",
          `ID: ${inquiry.id}`,
          `NAME: ${name}`,
          `EMAIL: ${email}`,
          `CLASS: ${typeLabel}`,
          `AT: ${inquiry.createdAt.toISOString()}`,
          "",
          "MESSAGE:",
          message,
        ].join("\n"),
      });
    } else {
      console.warn("Resend skipped: RESEND_API_KEY or INQUIRY_TO_EMAIL missing");
    }

    return { ok: true as const, id: inquiry.id };
  } catch (error) {
    console.error("submitInquiry failed:", error);
    return { ok: false as const, error: "Transmission failed. Retry shortly." };
  }
}