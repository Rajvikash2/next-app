import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server';
import { Resend } from 'resend'
 
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(){
   await resend.emails.send({
        from:'Acme <onboarding@resend.dev>',  // we need to provide a domain here. Not from gmail or yahoo
        to:'rajvikash.r2022cse@sece.ac.in',
        subject:"Test email",
        react: <WelcomeTemplate/>
    })

    return NextResponse.json({message:"email sent"});
}