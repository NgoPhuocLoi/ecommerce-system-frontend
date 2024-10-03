import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { locales, routing } from "./i18n/routing";

const handleI18nRouting = createIntlMiddleware(routing);

const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);
const isPublicRoute = createRouteMatcher([
  "/:locale/sign-in(.*)",
  "/:locale/sign-up(.*)",
]);

export default clerkMiddleware(
  (auth, req) => {
    // console.log({ isPublicRoute });
    if (!isPublicRoute(req)) auth().protect();

    return handleI18nRouting(req);
  },
  {
    signInUrl: "/vi/sign-in",
    signUpUrl: "/vi/sign-up",
  },
);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};
