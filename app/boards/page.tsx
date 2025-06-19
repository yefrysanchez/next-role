import BoardCard from "@/components/board-hub/BoardCard";
import CreateBoard from "@/components/board-hub/CreateBoard";
import { getBoards } from "@/lib/actions/actions";
import { getSlug } from "@/lib/helpers";

const Page = async () => {
  const boards = await getBoards();

  return (
    <div className="pt-16 px-4">
      <h1 className="font-bold tracking-tighter text-4xl">Boards Hub</h1>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-3xl">
        <CreateBoard />
        {boards.map((board, i) => (
          <BoardCard
            key={i}
            title={board.title}
            url={`/boards/${getSlug(board.id, board.slug)}`}
            id={board.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Page;
