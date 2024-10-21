import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";
import { teacherSchema } from "@/schema/teacherSchema";

export async function GET() {
  try {
    const teacher = await prisma.teacher.findMany({
      include: {
        Department: true,
      },
    });

    return NextResponse.json(teacher, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// for post

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const schema = await teacherSchema.validate(body, { abortEarly: false });

    const teacher = await prisma.teacher.create({
      data: schema,
    });
    return NextResponse.json(teacher, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
