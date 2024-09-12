import { NextRequest, NextResponse } from "next/server";
import schema from './shema';
export function GET(request:NextRequest){
    return  NextResponse.json([
        {
            id:1,
            name:"John",
            
        },
        {
            id:2,
            name:"Doe",
        },
    ]);
}

export async function POST(request:NextRequest){
    const body = await request.json();
    const result = schema.safeParse(body);
    if(!result.success){
        return NextResponse.json(result.error.errors,{status:400})
    }
    return NextResponse.json(body,{status:201});

}   