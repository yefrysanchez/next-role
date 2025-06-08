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
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CreateJob = () => {
  return (
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
          <label htmlFor="" className=" text-xs">
            <span className="font-bold">Job Modality</span>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue className="placeholder:font-normal" placeholder="Select Working Place" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup  className="w-full">
                  <SelectLabel>Work from</SelectLabel>
                  <SelectItem  value="On Site">On Site</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
            <Button  className="min-w-[100px]" type="button">
              Add
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJob;
