import { headers } from "next/headers";
import { auth } from "../auth";
import { db } from "@/db/drizzle";
import { boards, columns, jobs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getSlug } from "../helpers";
import { redirect } from "next/navigation";

const { getSession } = auth.api;

// Boards Actions

export const getBoards = async () => {
  "use server";

  const session = await getSession({ headers: await headers() });

  if (!session?.user.id) {
    redirect("/login")
  }
  const res = await db
    .select()
    .from(boards)
    .where(eq(boards.userId, session.user.id));
  return res;
};

export const getBoard = async (slug: string) => {
  "use server";
  const session = await getSession({ headers: await headers() });

  if (!session?.user.id) {
     redirect("/login")
  }
  const res = await getBoards();
  const board = res.find((board) => getSlug(board.id, board.slug) === slug);
  if (!board) {
    return null;
  }
  return board;
};

// Columns Actions

export const getColumns = async (boardId: string) => {
  "use server";
  const session = await getSession({ headers: await headers() });

  if (!session?.user.id) {
    redirect("/login")
  }

  const res = await db
    .select()
    .from(columns)
    .where(eq(columns.boardId, boardId));
  return res;
};

// Jobs Actions

export const getJobs = async (columnId: number) => {
  "use server";
  const session = await getSession({ headers: await headers() });

  if (!session?.user.id) {
     redirect("/login")
  }

  const res = await db.select().from(jobs).where(eq(jobs.columnId, columnId));
  return res;
};
