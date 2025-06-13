import React from "react";
import { Skeleton } from "../ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <>
      <Skeleton className="bg-gray-100  w-full  rounded-md  mx-2 h-40" />
      <Skeleton className="bg-gray-100  w-full  rounded-md  mx-2 h-40" />
      <Skeleton className="bg-gray-100  w-full  rounded-md  mx-2 h-40" />
    </>
  );
};

export default JobCardSkeleton;
