import { ArrowRightLeft, ExternalLink, Trash2 } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

type JobCardProps = {
  job?: Job;
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

  return (
    <div className="bg-gray-50  w-full p-4 rounded-md grid gap-1 mx-2 pb-8 group relative hover:bg-gray-100 cursor-grab active:cursor-grabbing active:opacity-65">
      <JobDetails job = {job}>
        <h3 className="text-sm font-semibold">{job?.title}</h3>
        <p className="text-xs font-medium text-muted-foreground">
          {job?.company}
        </p>
        <p className="text-green-600 text-xs">
          {job?.salary ? job?.salary : ""}
        </p>
      </JobDetails>
      <Badge variant="outline">
        <span className="scale-85 capitalize">
          {handleModality(job?.modality || "Unknown Location")}
        </span>
      </Badge>
      <div className="xl:hidden gap-1 flex group-hover:flex absolute right-2 bottom-2">
        <a
          href={job?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-gray-100 hover:bg-blue-100 p-1 rounded-sm cursor-pointer"
        >
          <ExternalLink size={15} />
        </a>

        <AlertDialog>
          <AlertDialogTrigger>
            <div
              className="text-red-500 bg-gray-100 hover:bg-red-100 p-1 rounded-sm cursor-pointer "
              role="button"
            >
              <Trash2 size={15} />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="text-red-500 bg-red-50 hover:bg-red-100 px-8">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
