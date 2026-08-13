import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";

export async function GET() {
  try {
    // Ping Cloudinary's operational API servers to validate credentials
    const result = await cloudinary.api.ping();
    return NextResponse.json({ status: "Cloudinary connected!", result });
  } catch (error: any) {
    console.error("Cloudinary handshake failure:", error);
    return NextResponse.json(
      { 
        error: "Cloudinary connection failed", 
        exceptionDetails: error.message || error 
      }, 
      { status: 500 }
    );
  }
}   