import BackBtn from "@/components/BackBtn";
import BoardColumn from "@/components/board/BoardColumn";
import ChangeBoardName from "@/components/board/ChangeBoardName";
import { Pencil } from "lucide-react";
import React from "react";


const Page = () => {
  return (
    <div className="h-full border-t bg-gray-100 pt-16 px-4">
      <BackBtn/>
      <div className="group flex flex-col items-center justify-center gap-2  py-4 ">
        <h1 className="font-bold tracking-tighter text-4xl text-centerflex justify-center items-start gap-2 group">
          Board Title
        </h1>
        <ChangeBoardName>
          <button className="hover:bg-gray-200 p-1 rounded-md cursor-pointer lg:opacity-0 opacity-100  group-hover:opacity-100 transition-opacity">
            <Pencil size={15} />
          </button>
        </ChangeBoardName>
      </div>
      <section className="lg:grid lg:grid-cols-4 gap-2 flex overflow-x-scroll lg:overflow-x-auto">
        <BoardColumn title="wishlist" />
        <BoardColumn title="applied" />
        <BoardColumn title="interview" />
        <BoardColumn title="offer" />
      </section>
    </div>
  );
};

export default Page;
