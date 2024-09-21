import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "../shema";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }  // id is initially a string
) {
    // const userId = parseInt(params.id, 10);  // Convert id to an integer

    // if (isNaN(userId)) {
    //     return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    // }

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(
    request:NextRequest,
    {params}:{params:{id:string}}
){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400});
    }

    const foundUser = await prisma.user.findUnique({
        where:{id:parseInt(params.id)}
    })

    if(!foundUser){
        return NextResponse.json({error:"User not found"},{status:400})
    }

   const updatedUser=await prisma.user.update({
        where:{
            id:foundUser.id
        },
        data:{
            name:body.name,
            email:body.email
        }
    })
    return NextResponse.json(updatedUser)
}


export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const userId = parseInt(params.id, 10);  // Convert id to an integer
    const user = await prisma.user.findUnique({
        where:{id:userId}
    })

    if (isNaN(userId)) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    await prisma.user.delete({
        where:{id:user.id}
    })
    return NextResponse.json({});
}
