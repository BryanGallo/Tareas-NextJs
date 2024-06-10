import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET() {
    const task = await prisma.task.findMany();
    console.log(task);
    return NextResponse.json({
        message: "Obteniendo Tareas",
    });
}
export function POST() {
    return NextResponse.json({
        message: "Creando Tareas",
    });
}
