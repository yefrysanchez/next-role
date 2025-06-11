import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Job } from "@/lib/types";

type JobDetailsTypes = {
  children: React.ReactNode;
  job?: Job;
};

const JobDetails = ({ children, job }: JobDetailsTypes) => {
  return (
    <Dialog>
      <DialogTrigger className="text-start cursor-pointer w-fit select-none">
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{job?.title}</DialogTitle>
          <DialogDescription>{job?.company}</DialogDescription>
        </DialogHeader>
        <p className="text-green-600 text-xs">{job?.salary || "Salary not available"}</p>
        <p>
          {job?.description || "Description not available"}
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-blue-500 hover:underline w-fit"
        >
          Job Posting Link
        </a>
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
