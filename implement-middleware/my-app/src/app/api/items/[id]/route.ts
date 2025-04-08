import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../../../config/mongodb";
import Item from "../../../../models/itemSchema";

interface RouteParams {
    params: { id: string };
  }

export async function PUT(request:NextRequest, { params}:RouteParams ) {
  const { id } = await params;
  const { owner: owner, title: title, description: description, url: url } = await request.json();
  await connectMongoDB();
  await Item.findByIdAndUpdate(id, { owner, title, description, url });
  return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

export async function GET(request:NextRequest, { params }:RouteParams) {
  const { id } = await params;
  await connectMongoDB();
  const item = await Item.findOne({ _id: id });
  return NextResponse.json({ item }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }
  
    await connectMongoDB();
    const deletedItem = await Item.findByIdAndDelete(id);
  
    if (!deletedItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }
  
    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
  }