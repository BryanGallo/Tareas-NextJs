import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    console.log(task);
    return NextResponse.json(task);
}
export function PUT(request, { params }) {
    return NextResponse.json({
        message: `Editando Tarea ${params.id}`,
    });
}
export function DELETE(request, { params }) {
    return NextResponse.json({
        message: `Eliminando Tarea ${params.id}`,
    });
}
