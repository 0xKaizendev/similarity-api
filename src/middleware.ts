import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getToken } from "next-auth/jwt";
import { withAuth } from  "next-auth/middleware"
import { NextResponse } from "next/server";

const redis = new Redis({
    url : process.env.REDIS_URL, 
    token: process.env.REDIS_SECRET
})

const ratelimit =  new Ratelimit({
    redis, 
    limiter : Ratelimit.slidingWindow(5, '1 h')
})

export default withAuth (
    
    async function middleware(request ) {

        const pathname = request.nextUrl.pathname ; 

        if(pathname.startsWith("/api")) {
        
            const ip  = request.ip ?? '127.0.0.1' 

            try {
                const {success} = await ratelimit.limit(ip) ; 
                if(!success) {

                    return NextResponse.json({
                        error :  'Too many requests'
                    })
                }

                return NextResponse.next()
            } catch (error) {
                return NextResponse.json({
                    error :  'Internal Server Error'
                })
            }

        }

        // route protecting 
        
        const token = await getToken({ req : request }) ; 

        const isAuth = !!token ; 

        const isAuthPage = pathname.startsWith('/login') 

        const sensitiveRoutes = ['/dashboard'] 

        if(isAuthPage) {
            if(isAuth)
            return NextResponse.redirect(new URL('/dashboard', request.url))

            return null 
        }

        if(!isAuth && sensitiveRoutes.some((route) => pathname.startsWith(route))) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    },    
    {
        callbacks: {
          async authorized() {
            return true
          },
        },
      }
    
)

export const config = {
    matcher : ['/' , '/login', '/dashboard/:path*', '/api/:path*' ]
}