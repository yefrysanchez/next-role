"use client"; 

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface SearchJobsProps {
  onSearch: (query: string) => void; // Callback to pass search query
}

const SearchJobs = ({ onSearch }: SearchJobsProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <form className="px-2 mt-4 relative" onSubmit={(e) => e.preventDefault()}>
      <Search
        size={15}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <Input
        type="search"
        placeholder="Search jobs..."
        className="bg-gray-50 border-0 pl-10"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchJobs;