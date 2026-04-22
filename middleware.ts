import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/src/i18n/config";

function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const lang of ranked) {
    const base = lang.split("-")[0];
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/.well-known")) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
