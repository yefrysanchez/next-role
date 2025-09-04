import { getColumns } from "@/lib/actions/actions";
import { NextResponse } from "next/server";

import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { boardId } = z.object({ boardId: z.string() }).parse(body);

    const data = await getColumns(boardId);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to get columns" }, { status: 500 });
  }
}
