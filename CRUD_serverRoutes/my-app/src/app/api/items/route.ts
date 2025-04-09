import connectMongoDB from "../../../../config/mongodb";
import Item from "@/app/models/ItemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const items = await Item.find();
    return new NextResponse(JSON.stringify(items), { status: 200 });
}

export async function POST(request: NextRequest) {
    const { name, description, age } = await request.json();
    await connectMongoDB();
    const newItem = await Item.create({ name, description, age });
    return new NextResponse(JSON.stringify({ message: "Item successfully added", item: newItem }), { status: 201 });
}
