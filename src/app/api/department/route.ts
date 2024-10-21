import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";

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
