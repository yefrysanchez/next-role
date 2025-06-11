"use server";
import BackBtn from "@/components/BackBtn";
import BoardColumn from "@/components/board/BoardColumn";
import ChangeBoardName from "@/components/board/ChangeBoardName";
import { Pencil } from "lucide-react";
import { placeholderJobs } from "@/lib/placeholder-data"; // Assuming you have a placeholder data file
import { getBoard } from "@/lib/actions/actions";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const board = await getBoard(slug);
  if (!board) {
    return (
      <div className="h-full flex items-center justify-center">
        Board not found
      </div>
    );
  }
  return (
    <div className="h-full border-t bg-gray-100 pt-16 px-4">
      <BackBtn />
      <div className="group flex flex-col items-center justify-center gap-2  py-4 ">
        <h1 className="font-bold tracking-tighter   text-4xl text-centerflex justify-center items-start gap-2 group">
          {board.title}
        </h1>
        <ChangeBoardName>
          <div className="hover:bg-gray-200 duration-300 p-1 flex justify-center items-center h-8 w-8 rounded-md cursor-pointer lg:opacity-0 opacity-100  group-hover:opacity-100 transition-all">
            <Pencil size={15} />
          </div>
        </ChangeBoardName>
      </div>
      <section className="xl:grid xl:grid-cols-4 gap-2 flex overflow-x-scroll lg:overflow-x-auto">
        <BoardColumn jobs={placeholderJobs.closed} title="closed" />
        <BoardColumn jobs={placeholderJobs.applied} title="applied" />
        <BoardColumn jobs={placeholderJobs.interview} title="interview" />
        <BoardColumn jobs={placeholderJobs.offer} title="offer" />
      </section>
    </div>
  );
};

export default Page;
