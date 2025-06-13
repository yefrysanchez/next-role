import { db } from "@/db/drizzle";
import { jobs, columns } from "@/db/schema";
import { InferModel } from "drizzle-orm";


type NewJob = InferModel<typeof jobs, "insert">;

async function seedJobs() {

  const allColumns = await db.select().from(columns);


  if (allColumns.length === 0) {
    console.error("❌ No columns found. Please seed columns first.");
    return;
  }

  const jobValues: NewJob[] = [
    {
      title: "Frontend Developer",
      company: "Acme Inc",
      modality: "remote",
      columnId: allColumns[0].id, // 👈 Make sure this ID exists
      url: "https://acme.jobs/frontend",
      salary: "$90,000",
      description: "Work on React-based web apps.",
    },
    {
      title: "Backend Engineer",
      company: "Beta Corp",
      modality: "hybrid",
      columnId: allColumns[1]?.id ?? allColumns[0].id,
      url: "https://beta.jobs/backend",
      salary: "$100,000",
      description: "Node.js and PostgreSQL backend development.",
    },
  ];

  await db.insert(jobs).values(jobValues);

  console.log("✅ Seeded jobs!");
}

seedJobs().catch((err) => {
  console.error("❌ Job seeding failed:", err);
  process.exit(1);
});
