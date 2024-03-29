import { NextResponse } from "next/server";
import { connectDB } from "../../../utils/mongoose";
import Task from "../../models/Task";

export async function GET() {
    await connectDB();
    try {
        const tasks = await Task.find();
        return NextResponse.json({ tasks });
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 500 // Código de estado de error interno del servidor
        });
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const data = await request.json();
        console.log(data);
        const newTask = new Task(data);
        const savedTask = await newTask.save();
    
        return NextResponse.json(savedTask);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        });
    }
}
