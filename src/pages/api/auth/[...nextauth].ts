import NextAuth from 'next-auth' 
import {authOptions} from '@/libs/utils/auth'
export default NextAuth(authOptions)
