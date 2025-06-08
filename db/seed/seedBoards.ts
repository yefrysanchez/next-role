

import { db } from "@/db/drizzle"
import { boards } from "@/db/schema"; 
import { v4 as uuidv4 } from "uuid";


async function main() {
  const userId = "aLMGTh0MW17oKKaMGZnVllHBEYp5PJXX"; // your test user

  await db.insert(boards).values([
    {
      id: uuidv4(),
      title: "Tech Job Hunt",
      slug: "tech-job-hunt",
      userId,
    },
    {
      id: uuidv4(),
      title: "Marketing Positions",
      slug: "marketing-positions",
      userId,
    },
  ]);

  console.log("✅ Seeded boards!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});