import { headers } from "next/headers";
import { auth } from "../auth";
import { db } from "@/db/drizzle";
import { boards } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getBoards = async () => {
  "use server";

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user.id) {
    throw new Error("Unauthorized");
  }
  const res = await db
    .select()
    .from(boards)
    .where(eq(boards.userId, session.user.id));
  console.log(res);
  return res;
};
