import { NextRequest, NextResponse } from "next/server"; // Import from "next/server"
import { db } from "@/db/drizzle";
import { boards, columns } from "@/db/schema";

import { CreateBoardTypes } from "@/lib/types";
import { getColumnsStructure } from "@/lib/utils";
import slugify from "slugify";


export async function GET() {
  return new Response("This a Board hub");
}

// Change to NextRequest (from "next/server")
export async function POST(req: NextRequest) {
  // Read the JSON body using req.json()
  const { title, id, userId }: CreateBoardTypes = await req.json();

  // --- Add validation here (recommended) ---
  if (typeof title !== 'string' || !title.trim()) {
    return NextResponse.json({ error: 'Title is required and must be a string.' }, { status: 400 });
  }
  if (typeof id !== 'string' || !id.trim()) { // Assuming id is a string UUID
    return NextResponse.json({ error: 'ID is required and must be a string.' }, { status: 400 });
  }
  if (typeof userId !== 'string' || !userId.trim()) { // Assuming userId is a string
    return NextResponse.json({ error: 'User ID is required and must be a string.' }, { status: 400 });
  }
  // --- End validation ---

  const newBoard = {
    id,
    title,
    // This line will now work correctly as 'title' will be a string
    slug: `${id}-${slugify(title, { lower: true, strict: true })}`,
    userId,
  };

  const initColumns = getColumnsStructure(id);

  try {
    // Insert the new board
    await db.insert(boards).values(newBoard);

    // Insert the default columns
    await Promise.all(
      initColumns.map((column) =>
        db.insert(columns).values({
          ...column,
          title: column.title as "closed" | "applied" | "interview" | "offer",
        })
      )
    );

    // ✅ Success response - use NextResponse for App Router
    return NextResponse.json({ message: "New board created successfully." }, { status: 201 });
  } catch (error) {
    console.error("Error creating board:", error);
    // Error response - use NextResponse for App Router
    return NextResponse.json({ error: "An error occurred while creating the board." }, { status: 500 });
  }
}