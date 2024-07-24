import mongDbConnect from "@/libs/mongDbConnect";
import ToDoTopics from "@/model/ToDoTopics";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { ident } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await mongDbConnect();
  await ToDoTopics.findByIdAndUpdate(ident, { title, description });
  return NextResponse.json(
    {
      message: "ToDo Task Updated",
    },
    {
      status: 200,
    }
  );
}

export async function GET(request, { params }) {
  const { identy } = params;
  await mongDbConnect();
  const topic = await ToDoTopics.findOne({ _id: identy });
  return NextResponse.json(
    {
      topic,
    },
    {
      status: 200,
    }
  );
}
