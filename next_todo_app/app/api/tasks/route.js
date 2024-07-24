import mongDbConnect from "@/libs/mongDbConnect";
import ToDoTopics from "@/model/ToDoTopics";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await mongDbConnect();
  await ToDoTopics.create({ title, description });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}
