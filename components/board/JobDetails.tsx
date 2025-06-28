import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Job } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { getFormattedUrl } from "@/lib/helpers";

type JobDetailsTypes = {
  children: React.ReactNode;
  job?: Job;
};

const JobDetails = ({ children, job }: JobDetailsTypes) => {
  const date = new Date(job?.createdAt || "");

  return (
    <Dialog>
      <DialogTrigger className="text-start cursor-pointer w-fit select-none">
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3 className="mb-4 text-base text-center border-dashed border-b pb-2">Job Details</h3>
            <h3>{job?.title}</h3>
            <h4 className="font-medium text-muted-foreground text-base">
              {job?.company}
            </h4>
            <p className="text-green-600 text-xs font-normal">
              $ {job?.salary || "Salary not available"}
            </p>
          </DialogTitle>
        </DialogHeader>

        {job?.url ? (
          <a
            href={getFormattedUrl(job.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-50 p-1 rounded-sm cursor-pointer flex items-center text-xs gap-2 w-fit select-none hover:underline transition-colors"
          >
            <span>
              <ExternalLink size={15} />
            </span>{" "}
            <span className="font-medium">View Job Posting</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() =>
              toast.error(
                "No URL provided for this job. Please add a URL to view the job posting."
              )
            }
            className="bg-gray-50 hover:bg-blue-100 p-1 rounded-sm cursor-pointer w-fit text-xs flex gap-2"
          >
            <ExternalLink size={15} /> <span>No URL provided</span>
          </button>
        )}

        <p className="text-xs text-muted-foreground">
          Added on {date.toLocaleDateString()}
        </p>

        <h4 className="font-semibold text-base">Description</h4>

        <p className="bg-gray-50 px-2 py-3 rounded-lg text-sm">{job?.description || "Description not available"}</p>

        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button variant="secondary" type="button">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetails;
