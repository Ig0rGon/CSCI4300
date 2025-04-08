import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    console.log(`Restricted rout hit: ${pathname}`);
    console.log("can't go here!");
    return NextResponse.redirect(new URL("/", request.url));
}

export const config: any = {
    matcher: [
        "/contact",
    ]
};

export default middleware;
