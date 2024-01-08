import { NextResponse } from "next/server"
import { connectDB } from "../../../utils/mongoose";

export async function GET() {
    await connectDB()
    return NextResponse.json({
        message: "hello world!",
    });
}