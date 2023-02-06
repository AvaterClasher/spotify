import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req:NextRequest){
    // Token will exist if user is logged in 
    const token = await getToken({req,secret:process.env.JWT_SECRET});
    const {pathname} = req.nextUrl

    //Allow the request if the following is true
    //1) the  tokens exist
    if (pathname.startsWith('/_next'))return NextResponse.next();
        
    if (pathname.startsWith('/api/auth') || token){
        return NextResponse.next();
    }

    //Redirect them to login
    if (!token && pathname !== '/login'){
        const loginUrl = new URL('/login',req.url)
        return NextResponse.redirect(loginUrl);
    }
}