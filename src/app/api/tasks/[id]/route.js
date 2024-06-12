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
export async function DELETE(request, { params }) {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(params.id),
            },
        });
        if (!task) {
            return NextResponse.json({
                message: `No hay nada aqui`,
            });
        }
        await prisma.task.delete({
            where: {
                id: Number(params.id),
            },
        });

        return NextResponse.json({
            message: `Eliminando Tarea ${params.id}`,
        });
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        });
    }
}
