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

type JobDetailsTypes = {
  children: React.ReactNode;
};

const JobDetails = ({ children }: JobDetailsTypes) => {
  return (
    <Dialog>
      <DialogTrigger className="text-start cursor-pointer w-fit select-none">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Software Engineer</DialogTitle>
          <DialogDescription>Google Cloud</DialogDescription>
        </DialogHeader>
        <p className="text-green-600 text-xs">$80,000 - $100,000</p>
        <p>
          {`About the job: We are looking for skilled Software engineers, coming
          from startups with good unis to join the team What You’ll Do Build
          great products quickly. Develop new features and improve our tech.
          Focus on user needs without strict plans. Maintain high code quality.
          Grow with the company. Help hire engineers. What You Bring 2+ years of
          software experience, ideally in startups. Fast, high-quality
          development skills. Customer-focused mindset. Bonus: Experience with
          React, React Native, TypeScript, Python, or AWS.`}
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-blue-500 hover:underline"
        >
          Job Posting Link
        </a>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button variant="secondary" type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetails;
