import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req, ev) {
  const { origin } = req.nextUrl;
  const token = req.cookies["access_token"];
  if (req.url.includes("/auth") && !!token)
    return NextResponse.redirect(`${origin}/translation`);
  if (!req.url.includes("/auth") && !token)
    return NextResponse.redirect(`${origin}/auth`);
  return NextResponse.next();
}
