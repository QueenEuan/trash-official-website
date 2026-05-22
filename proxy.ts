import { NextResponse, type NextRequest } from "next/server";

function canonicalize(pathname: string) {
  let nextPathname = pathname;

  if (nextPathname === "/zh") nextPathname = "/";
  if (nextPathname.startsWith("/zh/")) nextPathname = nextPathname.slice(3) || "/";

  if (nextPathname === "/press") nextPathname = "/press-kit";
  if (nextPathname.endsWith("/press")) nextPathname = nextPathname.replace(/\/press$/, "/press-kit");

  if (nextPathname === "/members/marz") nextPathname = "/members/marz23";
  if (nextPathname.endsWith("/members/marz")) nextPathname = nextPathname.replace(/\/members\/marz$/, "/members/marz23");

  return nextPathname;
}

export function proxy(request: NextRequest) {
  const canonicalPathname = canonicalize(request.nextUrl.pathname);

  if (canonicalPathname !== request.nextUrl.pathname) {
    const url = request.nextUrl.clone();
    url.pathname = canonicalPathname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/zh/:path*", "/press", "/:locale(en|ja|ko)/press", "/members/marz", "/:locale(en|ja|ko)/members/marz"],
};
