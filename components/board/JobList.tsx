"use client";

import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import SearchJobs from "./SearchJobs";

interface Job {
  id: number;
  title: string;
  company: string;
  modality: "remote" | "on_site" | "hybrid";
  url: string | null;
  salary: string | null;
  description: string | null;
  columnId: number;
  createdAt: Date | null;
}

interface JobListProps {
  initialJobs: Job[];
}

const JobList = ({ initialJobs }: JobListProps) => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState("");

  // Update jobs when searchQuery changes
  useEffect(() => {
    const filteredJobs = initialJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.salary?.includes(searchQuery)
    );
    setJobs(filteredJobs);
  }, [searchQuery, initialJobs]);

  return (
    <>
      <SearchJobs onSearch={setSearchQuery} />
      <div className="mt-4 flex flex-col items-center gap-4 px-2 overflow-y-auto">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500">No jobs available in this column.</p>
        )}
      </div>
    </>
  );
};

export default JobList;