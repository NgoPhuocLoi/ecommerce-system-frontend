import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./i18n/routing";
import { auth } from "@/auth";

const publicPages = [
  "/",
  "/auth/login",
  // (/secret requires auth)
];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "always",
  defaultLocale: "vi",
});

export default auth((req) => {
  // if (!req.auth && req.nextUrl.pathname !== "/login") {
  //   const newUrl = new URL("/login", req.nextUrl.origin);
  //   return Response.redirect(newUrl);
  // }
  return intlMiddleware(req);
});
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
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
