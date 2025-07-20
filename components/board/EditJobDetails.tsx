"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Job } from "@/lib/types";
import React, { FormEvent, useState } from "react";
import Spinner from "../Spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type EditJobDetalsType = {
  job: Job, 
  setIsEditting: (bool: boolean) => void
}

const EditJobDetals = ({ job, setIsEditting }: EditJobDetalsType) => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Local state for form inputs
  const [company, setCompany] = useState(job.company);
  const [title, setTitle] = useState(job.title);
  const [modality, setModality] = useState<"on_site" | "remote" | "hybrid">(
    job.modality
  );
  const [url, setUrl] = useState(job.url || "");
  const [salary, setSalary] = useState(job.salary || "");
  const [description, setDescription] = useState(job.description || "");

  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleModalityChange = (value: string) => {
    if (value === "on_site" || value === "remote" || value === "hybrid") {
      setModality(value);
    }
  };

  const handleClose = () => {
    setError(null);
    setIsLoading(false);
    // Reset form fields to initial job values
    setCompany(job.company);
    setTitle(job.title);
    setModality(job.modality);
    setUrl(job.url || "");
    setSalary(job.salary || "");
    setDescription(job.description || "");
    setIsEditting(false)
  };

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${apiUrl}/boards/job`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: job.id,
          company,
          jobTitle: title,
          modality,
          jobUrl: url,
          salary,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update job.");
      }
      const data = await res.json();
      toast.success(data || "Job updated successfully!");
    } catch (error: unknown) {
      console.error("Error editing job:", error);

      toast.error("Failed to edit Job. Please try again.");
    } finally {
      router.refresh(); // Refresh the page to reflect changes
      setIsEditting(false)
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen md:h-auto overflow-y-auto">
      <div className="text-2xl text-center font-semibold">Edit Job</div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <form onSubmit={handleEdit} className="grid gap-4">
        <label htmlFor="company">
          <span className="font-bold text-xs">Company *</span>
          <Input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="job-title"
            required
            placeholder="e.g. Software Engineer, Sales Engineer"
            type="text"
            name="job-title"
          />
        </label>
        <label htmlFor="modality" className="text-xs">
          <span className="font-bold">Job Modality *</span>
          <Select
            value={modality}
            onValueChange={handleModalityChange}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Working Place" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="w-full">
                <SelectLabel>Work from</SelectLabel>
                <SelectItem value="on_site">On Site</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        <label htmlFor="job-url">
          <span className="font-bold text-xs">Job Posting URL</span>
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="job-url"
            placeholder="https://jobpost.com/yourjob"
            type="text"
            name="job-url"
          />
        </label>
        <label htmlFor="salary">
          <span className="font-bold text-xs">Salary (if available)</span>
          <Input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            id="salary"
            placeholder="e.g. $70,000 - $90,000"
            type="text"
            name="salary"
          />
        </label>
        <label htmlFor="description">
          <span className="font-bold text-xs">Job Description</span>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            className="rounded-md max-h-60 overflow-y-auto"
          />
        </label>

        <div className="flex gap-4 justify-end">
          <div className="sm:justify-end">
            <Button
              onClick={handleClose}
              disabled={isLoading}
              type="button"
              variant="secondary"
            >
              Close
            </Button>
          </div>
          <Button disabled={isLoading} className="min-w-[100px]" type="submit">
            {isLoading ? <Spinner /> : "Edit Job"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditJobDetals;
