"use server"
import BoardCard from "@/components/board-hub/BoardCard";
import CreateBoard from "@/components/board-hub/CreateBoard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const boards = [
    {
      title: "Software Engineer",
      url: "/boards/board",
    },
    {
      title: "Sales Engineer",
      url: "/boards/board",
    },
    {
      title: "Network Engineer",
      url: "/boards/board",
    },
    {
      title: "Cloud Engineer",
      url: "/boards/board",
    },
  ];

    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
      if( !session){
        return redirect("/login")
      }

  return (
    <div className="pt-16 px-4">
      <h1 className="font-bold tracking-tighter text-4xl">Boards Hub</h1>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-3xl">
        <CreateBoard />
        {boards.map((board, i) => (
          <BoardCard key={i} title={board.title} url={board.url} />
        ))}
      </section>
    </div>
  );
};

export default Page;
