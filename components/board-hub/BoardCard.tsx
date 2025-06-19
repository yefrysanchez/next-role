import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Columns3 } from "lucide-react";
import DeleteBoardBtn from "./DeleteBoardBtn";
import ChangeBoardTitleBtn from "./ChangeBoardTitleBtn";

type BoardCardTypes = {
  title: string;
  url: string;
  id: string;
};

const BoardCard = ({ title, url, id }: BoardCardTypes) => {
  return (
    <div className="relative group">
      <div className="absolute right-4 bottom-4 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
        <ChangeBoardTitleBtn id={id} title={title} />
        <DeleteBoardBtn id={id} />
      </div>
      <Link href={url}>
        <Card className="h-full min-h-[210px] p-4 flex flex-col items-center justify-center hover:bg-gray-50">
          <h3 className="font-semibold text-xl text-center text-wrap">
            {title}
          </h3>
          <Columns3 size={40} />
        </Card>
      </Link>
    </div>
  );
};

export default BoardCard;
