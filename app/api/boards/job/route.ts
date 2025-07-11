import { db } from "@/db/drizzle";
import { jobs } from "@/db/schema";
import { JobModality } from "@/lib/types";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const { id }: { id: number } = await req.json();
//   db.select().from(jobs).where(eq(jobs.columnId, id));
// }

type Job = {
  id: number;
  columnId: number;
  company: string;
  jobTitle: string;
  modality: JobModality;
  jobUrl?: string | null | undefined;
  salary?: string | null | undefined;
  description?: string | null | undefined;
};

export async function POST(req: NextRequest) {
  const {
    columnId,
    company,
    jobTitle,
    modality,
    jobUrl,
    salary,
    description,
  }: Job = await req.json();

  const newJob = {
    columnId,
    company,
    title: jobTitle,
    modality,
    url: jobUrl || null,
    salary,
    description,
  };

  try {
    await db.insert(jobs).values(newJob);
    // ✅ Success response
    return NextResponse.json(
      { message: "New job created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating board:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the job." },
      { status: 500 }
    );
  }
}

// Edit Job

export async function PATCH(req: NextRequest) {
  const { id, company, jobTitle, modality, jobUrl, salary, description }: Job =
    await req.json();

  const updatedJob = {
    id,
    company,
    title: jobTitle,
    modality,
    url: jobUrl || null,
    salary,
    description,
  };

  try {
    const res = await db
      .update(jobs)
      .set(updatedJob)
      .where(eq(jobs.id, id))
      .returning({ id: jobs.id });

    // Check if any rows were updated by looking at the length of the returned array
    if (res.length === 0) {
      // This means no board with the given ID was found or updated
      return NextResponse.json("Board not found or no changes made.");
    }
    // Success Response: Return a success message
    return NextResponse.json("Job has been updated.");
  } catch (error) {
    // Error Handling: Log the error and return a 500 status
    console.error("Error updating board:", error);
    return NextResponse.json("An error occurred while updating the job.");
  }
}

// Delete Job
export async function DELETE(req: NextRequest) {
  const { id }: { id: number } = await req.json();

  try {
    await db.delete(jobs).where(eq(jobs.id, id));

    // Ensure proper response is sent back with status code 200
    return NextResponse.json({ message: "Job has been deleted." }, { status: 200 });
  } catch (error) {
    console.error("Error deleting job:", error);
    
    // Ensure the error response includes a meaningful message and correct status
    return NextResponse.json({ error: "An error occurred while deleting the job." }, { status: 500 });
  }
}

