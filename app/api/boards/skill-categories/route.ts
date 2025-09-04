import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const id: number = await req.json();
  console.log(id);
  return NextResponse.json({ id });
}