"use server";

import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { SectionPlacement } from "../../../prisma/generated";

export async function getAnalyticsMetrics() {
  try {
    const totalVisits = await prisma.analyticsHit.count();

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const pastWeekVisits = await prisma.analyticsHit.count({
      where: { timestamp: { gte: oneWeekAgo } },
    });

    const dailyBreakdown = [];
    for (let i = 6; i >= 0; i--) {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      start.setDate(start.getDate() - i);
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      end.setDate(end.getDate() - i);
      const count = await prisma.analyticsHit.count({
        where: { timestamp: { gte: start, lte: end } },
      });
      const dayName = start.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
      dailyBreakdown.push({ day: dayName, count });
    }

    return { totalVisits, pastWeekVisits, dailyBreakdown };
  } catch (err) {
    console.error("Failed analytics:", err);
    return { totalVisits: 0, pastWeekVisits: 0, dailyBreakdown: [] };
  }
}

export async function seedTestAnalytics() {
  try {
    await prisma.analyticsHit.deleteMany({
      where: { ipHash: { startsWith: "TEST-" } },
    });

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      d.setHours(12, 0, 0, 0);
      await prisma.analyticsHit.create({
        data: {
          ipHash: `TEST-${i}`,
          timestamp: d,
        },
      });
    }
    revalidatePath("/");
    return { success: true, message: "TEST DATA INJECTED // 7 RECORDS" };
  } catch (err: any) {
    console.error("Seed failed:", err);
    return { success: false, message: err.message || "Seed fault" };
  }
}

export async function uploadProduct(formData: {
  serial: string;
  name: string;
  price: number;
  category: string;
  composition: string;
  details: string;
  measurements: string;
  images: string[];
  placement: string;
  variants: { color: string; size: string; stock: number }[];
}) {
  try {
    await prisma.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          serial: formData.serial,
          name: formData.name.toUpperCase(),
          price: formData.price,
          category: formData.category.toLowerCase(),
          composition: formData.composition.toUpperCase(),
          details: formData.details,
          measurements: formData.measurements,
          images: formData.images,
          placement: formData.placement as SectionPlacement,
        },
      });

      for (const variant of formData.variants) {
        await tx.productSku.create({
          data: {
            productId: product.id,
            color: variant.color.toUpperCase(),
            size: variant.size.toUpperCase(),
            stock: variant.stock,
          },
        });
      }
    });

    revalidatePath("/");
    revalidatePath("/shop");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to inject product:", error);
    return { success: false, error: error.message || "Database execution fault" };
  }
}

export async function updateProduct(id: string, updates: Partial<{
  serial: string; name: string; price: number; category: string;
  composition: string; details: string; measurements: string;
  images: string[]; isActive: boolean; placement: SectionPlacement;
}>) {
  try {
    await prisma.product.update({ where: { id }, data: updates as any });
    revalidatePath("/");
    revalidatePath("/shop");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update product:", error);
    return { success: false, error: error.message || "Update fault" };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/shop");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete product:", error);
    return { success: false, error: error.message || "Delete fault" };
  }
}

// NEWSLETTER BROADCAST
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