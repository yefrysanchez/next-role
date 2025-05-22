import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Columns3 } from "lucide-react";

type BoardCardTypes = {
  title: string;
  url: string;
};

const BoardCard = ({ title, url }: BoardCardTypes) => {
  return (
    <Link href={url}>
      <Card className="h-full min-h-[210px] p-4 flex flex-col items-center justify-center hover:bg-gray-50">
        
        <h3 className="font-semibold text-xl text-center text-wrap">{title}</h3>
        <Columns3 size={40} />
      </Card>
    </Link>
  );
};

export default BoardCard;
