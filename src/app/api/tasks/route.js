import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET() {
    const task = await prisma.task.findMany();
    console.log(task);
    return NextResponse.json(task);
}
export async function POST(request) {
    const { title, description } = await request.json();
    console.log(title, description);
    await prisma.task.create({
        data: {
            titulo: title,
            description: description,
        },
    });
    return NextResponse.json({
        message: "Tarea Creada",
    });
}
