/* eslint-disable no-unused-vars */
import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string 


// définir le type des reponses google 
declare module 'next-auth/jwt' {

    interface JWT {
        id: UserId
    }
}

//définir le type des propriétés user de la session 
declare module 'next-auth' {
    interface Session {
        user: User & {
            id : UserId
        }
    }
}