import { NextRequest, NextResponse } from "next/server";
import { boards, columns } from "@/db/schema";
import { db } from "@/db/drizzle";

import { CreateBoardTypes } from "@/lib/types";
import { getColumnsStructure } from "@/lib/utils";
import { eq } from "drizzle-orm";

// export async function GET() {
//   return new Response("This a Board hub");
// }

//Create Board

export async function POST(req: NextRequest) {
  // Read the JSON body using req.json()
  const { title, id, userId, slug }: CreateBoardTypes = await req.json();

  // --- Add validation here (recommended) ---
  if (typeof title !== "string" || !title.trim()) {
    return NextResponse.json(
      { error: "Title is required and must be a string." },
      { status: 400 }
    );
  }
  if (typeof id !== "string" || !id.trim()) {
    // Assuming id is a string UUID
    return NextResponse.json(
      { error: "ID is required and must be a string." },
      { status: 400 }
    );
  }
  if (typeof userId !== "string" || !userId.trim()) {
    // Assuming userId is a string
    return NextResponse.json(
      { error: "User ID is required and must be a string." },
      { status: 400 }
    );
  }
  // --- End validation ---

  const newBoard = {
    id,
    title,
    slug,
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

    // ✅ Success response 
    return NextResponse.json(
      { message: "New board created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating board:", error);
    // Error response 
    return NextResponse.json(
      { error: "An error occurred while creating the board." },
      { status: 500 }
    );
  }
}


//Edit Board

export async function PATCH(req: NextRequest) {
  try {
    const { title, id } = await req.json();

    // 1. Input Validation: Check for missing title or id
    if (!title || !id) {
      return NextResponse.json({ error: "Missing title or id." }, { status: 400 });
    }

    // 2. Database Update: Use await with Drizzle's update operation
    //    Add .returning() to get the updated rows back
    const updatedBoards = await db
      .update(boards)
      .set({ title })
      .where(eq(boards.id, id))
      .returning({ id: boards.id }); // You can specify which columns to return, e.g., just the ID

    // 3. Check if any rows were updated by looking at the length of the returned array
    if (updatedBoards.length === 0) {
      // This means no board with the given ID was found or updated
      return NextResponse.json({ message: "Board not found or no changes made." }, { status: 404 });
    }

    // 4. Success Response: Return a success message
    return NextResponse.json({ message: "Board has been updated." });
  } catch (error) {
    // 5. Error Handling: Log the error and return a 500 status
    console.error("Error updating board:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the board." },
      { status: 500 }
    );
  }
}

// Delete Board

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (typeof id !== "string" || !id.trim()) {
      // Assuming id is a string UUID
      return NextResponse.json(
        { error: "ID is required and must be a string." },
        { status: 400 }
      );
    }

    await db.delete(columns).where(eq(columns.boardId, id));
    await db.delete(boards).where(eq(boards.id, id));

    NextResponse.json({ message: "Board has been deleted." });
  } catch (error) {
    console.error("Error deleting board:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the board." },
      { status: 500 }
    );
  }
}
