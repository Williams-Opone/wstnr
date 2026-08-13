import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Intercept attempts to view any admin views (excluding auth API calls)
  if (path.startsWith("/admin") && path !== "/admin/login") {
    const sessionToken = request.cookies.get("admin_session_token")?.value;

    // If the secure session signature is missing, redirect to lockscreen
    if (sessionToken !== "wstnr-authorized-state") {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Ensure middleware only intercepts specific matching administrative paths
export const config = {
  matcher: ["/admin/:path*"],
};