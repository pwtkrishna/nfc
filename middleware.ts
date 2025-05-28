import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check for your auth cookie (e.g., "auth-token")
  const token = request.cookies.get("auth-token")?.value;
  // Protect all /account routes
  if (!token && request.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// Apply to all /account routes and subroutes
export const config = {
  matcher: ["/", "/account/:path*"],
};
