import { KanbanColumns } from "@/lib/types";
import { db } from "./db";
import { boards, columns, jobs } from "./schema";

// Insert a user manually or use one from auth first
const userId = "example-user-id"; // use a real UUID from auth

async function main() {
  const insertedBoards = await db
    .insert(boards)
    .values({
      title: "IT Job Search",
      slug: "it-job-search",
      userId: userId,
    })
    .returning();

  const boardId = insertedBoards[0].id;

  const insertedColumns = await db
    .insert(columns)
    .values([
      { title: "rejected", boardId, order: 0 },
      { title: "applied", boardId, order: 1 },
      { title: "interview", boardId, order: 2 },
      { title: "offer", boardId, order: 3 },
    ])
    .returning();

  const appliedColumn = insertedColumns.find((col:KanbanColumns) => col.title === "applied");

  await db.insert(jobs).values([
    {
      title: "Software Engineer",
      company: "Google",
      modality: "on_site",
      url: "https://careers.google.com/jobs/software-engineer",
      salary: "$120,000 - $150,000",
      description: "Work on Google Search backend.",
      columnId: appliedColumn!.id,
    },
  ]);

  console.log("Seed completed.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
