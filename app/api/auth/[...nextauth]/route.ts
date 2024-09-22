import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt'
export const  AuthOptions: NextAuthOptions = { 
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name:'Credentials',
        credentials:{
          email:{label:'Email',type:'email',placeholder:'Enter your email'},
          password:{label:'Password',type:'password',placeholder:'Enter your password'},

        },
        async authorize(credentials, req) {
            if(!credentials?.email || !credentials.password) return null;
            
            const user = await prisma.user.findUnique({
              where:{email:credentials.email},
                    
            });
            if(!user) return null;
           const passwordmatch = await bcrypt.compare(credentials.password , user.hashedPassword!);
           return passwordmatch? user:null;
        },
      }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session:{
    strategy: 'jwt',
  }
}

const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST};