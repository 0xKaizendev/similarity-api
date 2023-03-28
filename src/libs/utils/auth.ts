import { NextAuthOptions } from "next-auth";
import { db } from "@/libs/utils/db";
import { PrismaAdapter} from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

function getGoogleCredentials () {
    const clientId = process.env.GOOGLE_CLIENT
    const clientSecret = process.env.GOOGLE_SECRET

    if(!clientId || clientId.length === 0 ){
        throw new Error('No Google client ID detected')
    }

    if(!clientSecret || clientSecret.length === 0) {
        throw new Error("No Google client secret detected")
    }

    return { clientId , clientSecret }
}

export const authOptions: NextAuthOptions = {
    adapter : PrismaAdapter(db) , 
    session: {
        strategy: 'jwt'
    }, 
    pages : {
        signIn : '/login'
    }, 
    providers : [
        GoogleProvider({
           clientId : getGoogleCredentials().clientId , 
           clientSecret : getGoogleCredentials().clientSecret
        })
    ], 
    callbacks : {
        // response from google auth 
        async session ({token , session}) {
            if(token)
            {
                session.user.id = token.id 
                session.user.name = token.name
                session.user.email = token.email
                session.user.image  = token.picture 
            }
            return session 
        }
    }



}