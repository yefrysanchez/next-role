"use client";
import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { config } from "dotenv";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

config();
type DeleteBoardBtnType = {
  id: string;
};

const DeleteBoardBtn = ({ id }: DeleteBoardBtnType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/boards`;

  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "DELETE",
        body: JSON.stringify({
          id,
        }),
      });
      if (!res.ok) {
        toast.error("An error have occured. Please try later.");
      }

      toast.success("Board has been deleted.");
      setOpen(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="cursor-pointer bg-red-100 hover:bg-red-400 text-black">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={handleDelete}
            className="bg-red-400 hover:bg-red-500"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBoardBtn;
