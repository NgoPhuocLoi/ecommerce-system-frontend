import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./i18n/routing";
import { auth } from "@/auth";

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "always",
  defaultLocale: "vi",
});

export default auth(intlMiddleware);
// export function middleware(req: NextRequest) {
//     const hostname = req?.headers?.get('host');
//     console.log({hostname})
//     const subdomain = hostname?.split('.');
//     if(!subdomain || subdomain.length < 2 || hostname?.startsWith("host.docker.internal")) {
//         return NextResponse.next()
//     }
//     const url = req.nextUrl.clone();

//     req.nextUrl.pathname = `/store/${[subdomain[0], url.pathname].join('')}`;
//     return NextResponse.rewrite(req.nextUrl);
//     // return NextResponse.next()
//   }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|auth).*)",
  ],
};
