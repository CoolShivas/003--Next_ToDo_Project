import mongDbConnect from "@/libs/mongDbConnect";
import ToDoTopics from "@/model/ToDoTopics";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await mongDbConnect();
  await ToDoTopics.create({ title, description });
  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  await mongDbConnect();
  const tips = await ToDoTopics.find();
  return NextResponse.json({ tips });
}

export async function DELETE(request) {
  const identity = request.nextUrl.searchParams.get("id");
  await mongDbConnect();
  await ToDoTopics.findByIdAndDelete(identity);
  return NextResponse.json(
    {
      message: "ToDo Task Deleted",
    },
    {
      status: 200,
    }
  );
}
