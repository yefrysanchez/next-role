ALTER TABLE "skills" DROP CONSTRAINT "skills_category_id_skill_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "skills" DROP COLUMN "category_id";--> statement-breakpoint
ALTER TABLE "skills" DROP COLUMN "is_custom";--> statement-breakpoint
ALTER TABLE "skills" ADD CONSTRAINT "skills_name_unique" UNIQUE("name");