import { NextResponse } from "next/server";
import { authKey } from "./constants/authKey";

export async function middleware(request) {
  const accessToken = request.cookies.get(authKey)?.value;
  const pathname = request.nextUrl.pathname;

  // Redirect users without access tokens away from the home page ("/")
  if (pathname.startsWith('/office') && !accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow access to all other routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/office/:path*"], // Match all routes
};
