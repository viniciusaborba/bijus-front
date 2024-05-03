import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUrl } from "./lib/utils";

export function middleware(request: NextRequest) {
  const cookiesNext = cookies().getAll();
  const token = cookiesNext[0];
  const pathname = request.nextUrl.pathname;
  if (pathname === "/sign-in" && token) {
    return NextResponse.redirect(new URL(getUrl("/")));
  }

  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL(getUrl("/sign-in")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
