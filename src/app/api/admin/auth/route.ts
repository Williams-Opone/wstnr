import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const systemSecret = process.env.ADMIN_SECRET_KEY;

    if (!password || password !== systemSecret) {
      return NextResponse.json(
        { error: "INVALID AUTHENTICATION PARAMETERS" },
        { status: 401 }
      );
    }

    // Passphrase matched. Generate response & set highly secure HttpOnly Cookie
    const response = NextResponse.json({ authorized: true });
    
    response.cookies.set("admin_session_token", "wstnr-authorized-state", {
      httpOnly: true, // Prevents cross-site scripting (XSS) extraction
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 12, // 12 hours operational window
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "INTERNAL PASS ENGINE CRASH" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("admin_session_token")?.value;
  
  if (token === "wstnr-authorized-state") {
    return NextResponse.json({ authorized: true });
  }
  
  return NextResponse.json({ authorized: false }, { status: 401 });
}