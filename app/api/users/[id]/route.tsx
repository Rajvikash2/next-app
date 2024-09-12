import { NextRequest, NextResponse } from "next/server";
import schema from '../shema';
export function GET(
    request:NextRequest,
    {params}:{params:{id:number}})
{
    if(params.id > 10){
        return NextResponse.json({error:"user not found"},{status:404})
    }
    return NextResponse.json({id:params.id,name:"John"})

}

export function DELETE(
    request:NextRequest,
    {params}:{params:{id:number}}
){
    if(params.id>10){
        return NextResponse.json({error:"user not found"},{status:404})
    }
    return NextResponse.json({});
}
