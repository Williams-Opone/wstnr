import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const count = await prisma.newsletter.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Subscriber count error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}