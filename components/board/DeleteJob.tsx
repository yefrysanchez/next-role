"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Job } from "@/lib/types";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Spinner from "../Spinner";
import { Button } from "../ui/button";

type DeleteJobProps = {
  job: Job;
};

const DeleteJob = ({ job }: DeleteJobProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`${apiUrl}/boards/job`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: job.id }),
      });

      if (!res.ok) {
        setIsLoading(false);
        throw new Error(`Failed to delete job.`);
      }

      const data = await res.json();

      toast.success(
        data.message ||
          `Job "${job.title} at ${job.company}" deleted successfully.`
      );
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error(`Failed to delete job "${job.title}" at ${job.company}.`);
    } finally {
      setIsLoading(false);
      router.refresh(); // Refresh the page to reflect the deletion
      setOpen(false); // Close the dialog after deletion
    }
  };

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger>
        <div
          className="text-red-500 bg-gray-100 hover:bg-red-100 p-1 rounded-sm cursor-pointer "
          role="button"
        >
          <Trash2 size={15} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {`This action cannot be undone. This will permanently delete "${job.title} at ${job.company}". Do you want to proceed?`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <Button
            disabled={isLoading}
            onClick={handleDelete}
            className=" bg-red-50 text-red-500 hover:bg-red-100 px-8 max-w-24 w-full"
          >
            {isLoading ? <Spinner className="text-red-500" /> : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteJob;
