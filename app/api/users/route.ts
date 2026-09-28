import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";

export async function GET() {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    await dbConnect();
    const body = await req.json();
    const user = await User.create(body);
    return NextResponse.json(user);
}
