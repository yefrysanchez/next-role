import BoardCard from "@/components/board-hub/BoardCard";
import CreateBoard from "@/components/board-hub/CreateBoard";
import React from "react";

const Page = () => {
  const boards = [
    {
      title: "Software Engineer",
      url: "/boards",
    },
    {
      title: "Sales Engineer",
      url: "/boards",
    },
    {
      title: "Network Engineer",
      url: "/boards",
    },
    {
      title: "Cloud Engineer",
      url: "/boards",
    },
  ];

  return (
    <div className="">
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
