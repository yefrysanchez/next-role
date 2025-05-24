import React from "react";
import {
  AlarmClock,
  Columns3Cog,
  Handshake,
  Phone,
  Plus,
  Star,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import JobCard from "./JobCard";
import BtnActionColumn from "./BtnActionColumn";
import SearchJobs from "./SearchJobs";

type BoardColumnTypes = {
  title: string;
};

const BoardColumn = ({ title }: BoardColumnTypes) => {
  const handleIcon = (title: string) => {
    switch (title) {
      case "wishlist":
        return <Star />;
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

  const jobs = [1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div className="shrink-0 w-3/4 lg:w-full lg:h-full max-h-[85vh] bg-white pt-12 border border-gray-100 rounded-lg flex flex-col">
      <div className="flex w-full justify-evenly items-center mb-4">
        {handleIcon(title)}
        <h2 className="uppercase font-semibold">{title}</h2>

        <BtnActionColumn />
      </div>
      <Dialog>
        <DialogTrigger className="w-full px-2">
          <div className="flex w-full justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer p-2 rounded-lg">
            <Plus size={30} />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Add Job</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4">
            <label htmlFor="company">
              <span className="font-bold text-xs">Company *</span>
              <Input
                id="company"
                required
                placeholder="e.g. Google, Apple, Meta"
                type="text"
                name="company"
              />
            </label>
            <label htmlFor="job-title">
              <span className="font-bold text-xs">Job Title *</span>
              <Input
                id="job-title"
                required
                placeholder="e.g. Software Engineer, Sales Engineer"
                type="text"
                name="job-title"
              />
            </label>
            <label htmlFor="job-url">
              <span className="font-bold text-xs">Job Posting URL</span>
              <Input
                id="job-url"
                placeholder="https://jobpost.com/yourjob"
                type="text"
                name="job-url"
              />
            </label>
            <label htmlFor="salary">
              <span className="font-bold text-xs">Salary (if available)</span>
              <Input
                id="salary"
                placeholder="e.g. $70,000 - $90,000"
                type="text"
                name="salary"
              />
            </label>

            <label htmlFor="description">
              <span className="font-bold text-xs">Job Description</span>
              <Textarea />
            </label>

            <div className="flex gap-4 justify-end">
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
              <Button className="min-w-[100px]" type="submit">
                Add
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <SearchJobs />
      <div className="mt-4 flex flex-col items-center px-2 gap-4 flex-1 overflow-y-scroll overflow-x-hidden">
        
        {
          jobs.map(job => (
            <JobCard key={job} />
          ))
        }
      </div>
    </div>
  );
};

export default BoardColumn;
