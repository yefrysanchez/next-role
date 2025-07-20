import React, { Suspense } from "react";
import {
  AlarmClock,
  Columns3Cog,
  Handshake,
  Phone,
  SquareX,
} from "lucide-react";

import JobCard from "./JobCard";
import BtnActionColumn from "./BtnActionColumn";
import SearchJobs from "./SearchJobs";
import CreateJob from "./CreateJob";
import { getJobs } from "@/lib/actions/actions";
import { Skeleton } from "../ui/skeleton";


type BoardColumnTypes = {
  title: string;
  column: {
    id: number;
    title: string;
    boardId: string;
    order: number;
  };
};

const BoardColumn = async ({ title, column }: BoardColumnTypes) => {
  const handleIcon = (title: string) => {
    switch (title) {
      case "closed":
        return <SquareX />;
      case "applied":
        return <AlarmClock />;
      case "interview":
        return <Phone />;
      case "offer":
        return <Handshake />;
      default:
        return <Columns3Cog />;
    }
  };

  const jobs = await getJobs(column.id);

  return (
    <div className="shrink-0 w-3/4 xl:w-full max-h-[1100px] bg-white pt-12 rounded-lg flex flex-col overflow-hidden">
      <Suspense
        fallback={<Skeleton className="h-10 bg-gray-100 w-5/6 mx-auto mb-4" />}
      >
        <div className="flex w-full justify-evenly items-center mb-4">
          {handleIcon(title)}
          <h2 className="uppercase font-semibold">{title}</h2>

          <BtnActionColumn />
        </div>
      </Suspense>

      <CreateJob columnId={column.id} />
      <SearchJobs />

      <div className="mt-4 flex flex-col items-center gap-4 px-2 overflow-y-auto">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500">No jobs available in this column.</p>
        )}
        
      </div>
    </div>
  );
};

export default BoardColumn;
