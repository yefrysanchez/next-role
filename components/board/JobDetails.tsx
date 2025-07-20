"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Job } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { formatCurrency, getFormattedUrl } from "@/lib/helpers";
import { Badge } from "../ui/badge";
import { useState } from "react";
import EditJobDetails from "./EditJobDetails";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type JobDetailsTypes = {
  children: React.ReactNode;
  job?: Job;
};

const JobDetails = ({ children, job }: JobDetailsTypes) => {
  const [isEditting, setIsEditting] = useState(false);
  const [open, setOpen] = useState(false);

  if (!job) {
    return null; // Or a fallback UI, e.g., <p>No job data available</p>
  }

  const date = new Date(job.createdAt || new Date());

  const handleUrlClick = () => {
    if (!job.url) {
      toast.error(
        "No job posting URL available. Please contact support or add a URL."
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="text-start cursor-pointer w-full select-none"
        aria-label={`View details for ${job.title}`}
      >
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        {isEditting ? (
          <EditJobDetails setIsEditting={setIsEditting} job={job} />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>
                <p className="mb-4 text-base text-center border-dashed border-b pb-2">
                  Job Details
                </p>
                <div className="flex gap-2 flex-col md:flex-row justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-500 w-fit">{job.company}</p>
                  </div>
                  {job.salary && (
                    <div className="text-green-600 font-medium">
                      {formatCurrency(job.salary)}
                    </div>
                  )}
                </div>
              </DialogTitle>
            </DialogHeader>

            {job.url ? (
              <a
                href={getFormattedUrl(job.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-50 p-1 rounded-sm cursor-pointer flex items-center text-xs gap-2 w-fit select-none hover:underline transition-colors"
                aria-label={`Visit job posting for ${job.title}`}
              >
                <ExternalLink size={15} />
                <span className="font-medium">View Job Posting</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={handleUrlClick}
                className="bg-gray-50 hover:bg-blue-100 p-1 rounded-sm cursor-pointer w-fit text-xs flex gap-2"
                aria-label="No job posting URL available"
              >
                <ExternalLink size={15} />
                <span>No URL provided</span>
              </button>
            )}

            <p className="text-xs text-muted-foreground">
              Added on {date.toLocaleDateString()}
            </p>

            <div className="pt-2">
              <h4 className="font-medium mb-3 flex gap-1 items-center">
                <span>Key Skills Required</span>{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="text-xs hover:underline text-muted-foreground flex gap-1 items-center"
                      href={"/boards/skills"}
                    >
                      <ExternalLink size={15} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit your skillset</p>
                  </TooltipContent>
                </Tooltip>
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-green-100 text-green-600"
                >
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  TypeScript
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Skills automatically extracted from job description
              </p>
            </div>

            <h4 className="font-semibold text-base">Description</h4>
            <p className="text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto">
              {job.description || "Description not available"}
            </p>

            <DialogFooter className="justify-end flex-col-reverse md:flex-row">
              <Button
                onClick={() => setIsEditting(true)}
                className="px-6 font-semibold"
                aria-label={`Edit job details for ${job.title}`}
              >
                Edit
              </Button>
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  className="font-semibold"
                  aria-label="Close job details dialog"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobDetails;
