import { NextResponse } from "next/server";
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/auth/sign-in";
  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token.length > 0) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isPublicPath && !token.length > 0) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/auth/sign-in",
    "/dashboard",
    "/dashboard/individual-students",
    "/dashboard/group-dynamics",
    "/dashboard/emotional-intelligence",
    "/dashboard/action-items",
  ],
};
