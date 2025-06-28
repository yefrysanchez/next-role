"use client";
import { ArrowRightLeft, ExternalLink } from "lucide-react";
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

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const columns = ["closed", "applied", "interview", "offer"];

  const handleModality = (str: string) => {
    // with this function format modality since db return "remote" | "hybrid" | "on_site";
    if (str === "on_site") {
      return "On Site";
    } else {
      return str;
    }
  };

  const getFormattedUrl = (url: string) => {
    if (!url) return "";
    return url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

    // If job.url is "www.google.com", it becomes "https://www.google.com" and opens as an aboslute URL not a relative one.

    // If it's already a full URL, like "https://jobs.example.com", it’s used as-is.
  };

  return (
    <div className="bg-gray-50  w-full p-4 rounded-md grid gap-1 mx-2 pb-8 group relative hover:bg-gray-100 cursor-grab active:cursor-grabbing active:opacity-65">
      <JobDetails job={job}>
        <h3 className="text-sm font-semibold">{job?.title}</h3>
        <p className="text-xs font-medium text-muted-foreground">
          {job?.company}
        </p>
        <p className="text-green-600 text-xs">
          {job?.salary ? `$ ${job?.salary}` : ""}
        </p>
      </JobDetails>
      <Badge variant="outline">
        <span className="scale-85 capitalize">
          {handleModality(job?.modality || "Unknown Location")}
        </span>
      </Badge>
      <div className="xl:hidden gap-1 flex group-hover:flex absolute right-2 bottom-2">
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
          <button
            type="button"
            onClick={() =>
              toast.error(
                "No URL provided for this job. Please add a URL to view the job posting."
              )
            }
            className="bg-gray-100 hover:bg-blue-100 p-1 rounded-sm cursor-pointer"
          >
            <ExternalLink size={15} />
          </button>
        )}
        <EditJob job={job} />

        <DeleteJob job={job} />
      </div>

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
  );
};

export default JobCard;
