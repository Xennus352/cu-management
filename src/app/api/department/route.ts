import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";
import { departmentSchema } from "@/schema/teacherSchema";

export async function GET() {
  try {
    const department = await prisma.department.findMany({});

    return NextResponse.json(department, { status: 200 });
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
    const schema = await departmentSchema.validate(body, { abortEarly: false });

    console.log(schema);
    const department = await prisma.department.create({
      data: schema,
    });
    return NextResponse.json(department, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
