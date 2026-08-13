import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const ipHash = Math.random().toString(36).slice(2) + Date.now().toString(36);
    await prisma.analyticsHit.create({ data: { ipHash } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Tracking error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}