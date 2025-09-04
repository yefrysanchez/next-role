
import { skillCategories as skillsData } from "@/lib/tech-skills";
import { db } from "../drizzle";
import {
  skills,
  skillCategories as skillCategoriesTable,
  skillCategorySkills,
} from "../schema";
import { eq } from "drizzle-orm";



async function seedSkillsAndCategories() {
  const insertedCategoryMap: Record<string, number> = {};
  const insertedSkillMap: Record<string, number> = {};

  for (const [categoryName, skillNames] of Object.entries(skillsData)) {
    // 1. Insert category
    const [category] =
      (await db
        .insert(skillCategoriesTable)
        .values({ name: categoryName })
        .onConflictDoNothing()
        .returning()) ?? [];

    const categoryId = category?.id ??
      (await db
        .select()
        .from(skillCategoriesTable)
        .where(eq(skillCategoriesTable.name, categoryName))
        .then((rows) => rows[0]?.id));

    if (!categoryId) continue;

    insertedCategoryMap[categoryName] = categoryId;

    for (const skillName of skillNames) {
      // 2. Insert skill
      const [skill] =
        (await db
          .insert(skills)
          .values({ name: skillName })
          .onConflictDoNothing()
          .returning()) ?? [];

      const skillId = skill?.id ??
        (await db
          .select()
          .from(skills)
          .where(eq(skills.name, skillName))
          .then((rows) => rows[0]?.id));

      if (!skillId) continue;

      insertedSkillMap[skillName] = skillId;

      // 3. Link skill to category
      await db
        .insert(skillCategorySkills)
        .values({ skillId, categoryId })
        .onConflictDoNothing(); // prevents duplicate entries
    }
  }

  console.log("✅ Skills and categories seeded.");
}



async function main() {
  await seedSkillsAndCategories();
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Error seeding:", err);
  process.exit(1);
});