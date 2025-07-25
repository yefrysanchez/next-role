"use client";
import {
  ArrowRightLeft,
  ExternalLink,
  Eye,
  GripHorizontal,
} from "lucide-react";
import React from "react";

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
import { Job } from "@/lib/types";
import { toast } from "sonner";
import DeleteJob from "./DeleteJob";
import EditJob from "./EditJob";
import { formatCurrency, getFormattedUrl } from "@/lib/helpers";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const columns = ["closed", "applied", "interview", "offer"];

  const handleModality = (str: string) => {
    // with this function format modality because db return "remote" | "hybrid" | "on_site";
    if (str === "on_site") {
      return "On Site";
    } else {
      return str;
    }
  };

  return (
    <JobDetails job={job}>
      <div className="bg-gray-50 group w-full p-4 rounded-md grid gap-1 pb-8 group relative hover:bg-gray-100 active:cursor-grabbing active:opacity-65">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <span>{job?.title}</span>
          <span className=" text-gray-400 transition-opacity duration-200 xl:opacity-0 group-hover:opacity-100">
            <Eye size={15} />
          </span>
        </h3>
        <p className="text-xs font-medium text-muted-foreground">
          {job?.company}
        </p>
        <p className="text-green-600 text-xs">
          {job?.salary ? `${formatCurrency(job?.salary)}` : ""}
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
            {columns.map((move) => (
              <DropdownMenuItem key={move} className="capitalize">
                {move}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </JobDetails>
  );
};

export default JobCard;
