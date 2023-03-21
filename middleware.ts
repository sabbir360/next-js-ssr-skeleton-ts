// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// Clone the request headers and set a new header `x-hello-from-middleware1`
	const requestHeaders = new Headers(request.headers);
	console.log(requestHeaders.get("host"));
}
