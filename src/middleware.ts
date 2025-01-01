import { clerkMiddleware, createRouterMatcher } from "@clerk/nextjs/server";
import { request } from "http";

const isProtected = createRouterMatcher([
  '/dashboard',
  '/invoices/:invoiceID',
  '/invoices/new'
])

export default clerkMiddleware(async(auth, request)=>{
  if ( isProtected(request))
    await auth.protect()
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};