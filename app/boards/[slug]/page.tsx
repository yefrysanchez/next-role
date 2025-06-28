"use server";
import BackBtn from "@/components/BackBtn";
import BoardColumn from "@/components/board/BoardColumn";
import { getBoard, getColumns } from "@/lib/actions/actions";
import ChangeBoardTitleBtn from "@/components/board-hub/ChangeBoardTitleBtn";

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

  const columns = await getColumns(board.id);

  return (
    <div className="h-full border-t bg-gray-100 pt-16 px-4">
      <BackBtn />
      <div className="group flex items-center justify-center gap-2  py-4 ">
        <h1 className="font-bold tracking-tighter   text-4xl text-centerflex justify-center items-start gap-2 group">
          {board.title}
        </h1>
        <ChangeBoardTitleBtn
          className="items-center py-2 bg-white hover:bg-gray-200 xl:opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-200"
          id={board.id}
          title={board.title}
        />
      </div>
      <section className="xl:grid xl:grid-cols-4 gap-2 flex overflow-x-scroll lg:overflow-x-auto">
        {columns
          .sort((a, b) => a.order - b.order)
          .map((column) => (
            <BoardColumn key={column.id} column={column} title={column.title} />
          ))}
      </section>
    </div>
  );
};

export default Page;
