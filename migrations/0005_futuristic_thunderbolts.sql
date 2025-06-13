ALTER TABLE "columns" ALTER COLUMN "title" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."column_title";--> statement-breakpoint
CREATE TYPE "public"."column_title" AS ENUM('closed', 'applied', 'interview', 'offer');--> statement-breakpoint
ALTER TABLE "columns" ALTER COLUMN "title" SET DATA TYPE "public"."column_title" USING "title"::"public"."column_title";--> statement-breakpoint
ALTER TABLE "columns" ALTER COLUMN "board_id" SET DATA TYPE uuid;