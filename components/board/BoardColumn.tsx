import React from "react";
import { Plus, Star } from "lucide-react";
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

const BoardColumn = () => {
  return (
    <div className="shrink-0 w-full lg:w-[300px] lg:min-h-[400px] h-full pt-12 bg-white border border-gray-100 rounded-lg">
      <div className="flex w-full justify-evenly items-center mb-4">
        <Star />
        <h2 className="uppercase font-semibold">wishlist</h2>

        <BtnActionColumn />
      </div>
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="flex w-full justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer p-2">
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
      <div className="mt-4">
        <JobCard />
      </div>
    </div>
  );
};

export default BoardColumn;
