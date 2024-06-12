import { prisma } from "@/app/libs/prisma";
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";
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

export async function PUT(request, { params }) {
    // const { title, description } = await request.json();
    const data = await request.json();
    console.log(data);
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(params.id),
        },
        data: data,
        // data: {
        //     // Cuando queremos actualizar parcialmente no extraemos y mandamos el objeto
        //     titulo: title,
        //     description: description,
        // },
    });
    return NextResponse.json(taskUpdate);
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
