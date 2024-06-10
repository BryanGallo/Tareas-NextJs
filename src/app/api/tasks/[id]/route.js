import { NextResponse } from "next/server";

export function GET(request, { params }) {
    return NextResponse.json({
        message: `Obteniendo Tarea ${params.id}`,
    });
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
