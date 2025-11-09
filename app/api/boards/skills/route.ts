import { db } from "@/db/drizzle";
import { skills } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

type SkillsTypes = {
  skills: string[];
  userId: string;
};

export async function GET(req: NextRequest) {
  const { id }: { id: string } = await req.json();

  const userSkills = db.select().from(skills).where(eq(skills.userId, id));

  return NextResponse.json(userSkills);
}

export async function POST(req: NextRequest) {
  const { userId, skills }: SkillsTypes = await req.json();

  console.log(`Id: ${userId}, Skills: ${skills}`);

  // await db.insert(skills).values({ userId, name });

  return NextResponse.json({ message: "Skills saved successfully!" });
}
