"use client";
import {
  ArrowRightLeft,
  ExternalLink,
  Eye,
  GripHorizontal,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import JobDetails from "./JobDetails";
import { Badge } from "../ui/badge";
import { ColumnsTypes, Job } from "@/lib/types";
import { toast } from "sonner";
import DeleteJob from "./DeleteJob";
import EditJob from "./EditJob";
import { formatCurrency, getFormattedUrl } from "@/lib/helpers";
import { Skeleton } from "../ui/skeleton";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const [columns, setColumns] = useState<ColumnsTypes[] | null>(null);

  useEffect(() => {
    const fetchColumns = async () => {
      const boardId = window.location.pathname.split("/")[2];

      try {
        const res = await fetch(`${baseURL}/boards/columns`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ boardId }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch columns");
        }

        const data = await res.json();
        setColumns(data);
      } catch (err) {
        console.error("Error fetching columns:", err);
        toast.error("Failed to load board columns.");
      }
    };

    fetchColumns();
  }, []);

  const handleModality = (str: string) => {
    if (str === "on_site") return "On Site";
    return str;
  };

  const handleColumnChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    // move job logic goes here
  };

  return (
    <JobDetails job={job}>
      <div className="bg-gray-50 group w-full p-4 rounded-md grid gap-1 pb-8 relative hover:bg-gray-100 active:cursor-grabbing active:opacity-65">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <span>{job?.title}</span>
          <span className="text-gray-400 transition-opacity duration-200 xl:opacity-0 group-hover:opacity-100">
            <Eye size={15} />
          </span>
        </h3>
        <p className="text-xs font-medium text-muted-foreground">
          {job?.company}
        </p>
        <p className="text-green-600 text-xs">
          {job?.salary ? formatCurrency(job.salary) : ""}
        </p>
        <Badge variant="outline">
          <span className="scale-85 capitalize">
            {handleModality(job?.modality || "Unknown Location")}
          </span>
        </Badge>

        <div
          onClick={(e) => e.stopPropagation()}
          className="xl:opacity-0 gap-1 group-hover:opacity-100 flex absolute right-2 bottom-2 transition-opacity duration-200 z-40"
        >
          {job?.url ? (
            <a
              href={getFormattedUrl(job.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-blue-100 p-1 rounded-sm cursor-pointer"
            >
              <ExternalLink size={15} />
            </a>
          ) : (
            <div
              role="button"
              onClick={() =>
                toast.error(
                  "No URL provided for this job. Please add a URL to view the job posting."
                )
              }
              className="bg-gray-100 hover:bg-blue-100 p-1 rounded-sm cursor-pointer"
            >
              <ExternalLink size={15} />
            </div>
          )}
          <EditJob job={job} />
          <DeleteJob job={job} />
        </div>

        <GripHorizontal
          onClick={(e) => e.stopPropagation()}
          className="absolute right-2 top-2 hidden xl:block hover:cursor-grab active:cursor-grabbing"
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="absolute right-2 top-2 xl:hidden">
            <ArrowRightLeft size={15} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="font-bold">Move to</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {columns ? (
              columns
                .filter((c) => c.id !== job.columnId)
                .sort((a, b) => a.order - b.order)
                .map((column) => (
                  <DropdownMenuItem
                    key={column.id}
                    onClick={handleColumnChange}
                    className="capitalize"
                  >
                    {column.title}
                  </DropdownMenuItem>
                ))
            ) : (
              <div className="p-2">
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-4 w-24 mb-1" />
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </JobDetails>
  );
};

export default JobCard;
