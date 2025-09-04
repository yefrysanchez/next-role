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
import { Job } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import {
  formatCurrency,
  getFormattedUrl,
  getMatchedAndUnmatchedSkills,
} from "@/lib/helpers";
import { Badge } from "../ui/badge";
import { useState } from "react";
import EditJobDetails from "./EditJobDetails";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

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

  // Mock user skills for now.
  const userSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
  ];

  const { matchedSkills, unmatchedSkills } = job.description
    ? getMatchedAndUnmatchedSkills(userSkills, job.description)
    : { matchedSkills: [], unmatchedSkills: [] };

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
                    <p className="text-gray-500 w-fit text-base leading-3">{job.company}</p>
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
                className="hover:bg-gray-100 p-1 rounded-sm cursor-pointer flex items-center text-xs gap-2 w-fit select-none hover:underline transition-colors"
                aria-label={`Visit job posting for ${job.title}`}
              >
                <span className="font-medium">View Job Posting</span>
                <ExternalLink size={15} />
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

            {userSkills.length > 0 ? (
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
                </h4> <p className="text-xs text-gray-500 mb-2">
                  Skills automatically extracted from job description
                </p>
                <div className="flex flex-wrap gap-2 capitalize">
                  
                  {matchedSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="text-xs bg-green-100 text-green-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {unmatchedSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="text-xs bg-gray-100 text-gray-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
               
              </div>
            ) : (
              <>
                <p className="text-xs  mt-2 leading-0 text-red-400">
                  No skills found in your profile.
                </p>
                <Link href={"/boards/skills"}>
                  <Button className="text-sm flex items-center gap-1 cursor-pointer">
                    <span>Add your skills</span>{" "}
                    <span>
                      <ExternalLink />
                    </span>
                  </Button>
                </Link>
              </>
            )}
            <h4 className="font-semibold text-base">Description</h4>
            <p className="text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto">
              {job.description || "Description not available"}
            </p>

            <DialogFooter className="justify-end flex-col-reverse md:flex-row">
              <div
                onClick={() => setIsEditting(true)}
                className=" bg-black px-6 py-2 rounded-md hover:bg-gray-800 text-white cursor-pointer duration-300 text-center"
                aria-label={`Edit job details for ${job.title}`}
              >
                Edit
              </div>
              <DialogClose asChild>
                <div
                  className=" bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer duration-300 text-center"
                  aria-label="Close job details dialog"
                >
                  Close
                </div>
              </DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobDetails;
