"use client";

import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";

type ChangeBoardTitleBtnTypes = {
  id: string;
  title: string;
  className?: string; //so depend on where is used we can change the style
};

const ChangeBoardTitleBtn = ({
  id,
  title,
  className = "",
}: ChangeBoardTitleBtnTypes) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/boards`;
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [newTitle, setNewTitle] = useState(title);

  const router = useRouter();

  const handleTitleChange = async () => {
    setIsLoading(true);
    if (newTitle === title) {
      toast.error("Title is not changed.");
      setIsLoading(false);
      return;
    }
    if (newTitle === "") {
      toast.error("Title can't be empty.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: "PATCH",
        body: JSON.stringify({
          id,
          title: newTitle,
        }),
      });
      if (!res) {
        setIsLoading(false);
        toast.error("An error have occured. Please try later.");
      }

      toast.success("Board's title changed successfully.");
      setOpen(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("An error occurred:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    } finally {
      router.refresh();

      setIsLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger>
        <div
          className={`flex justify-center items-center border h-full w-10 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${className}`}
        >
          <Pencil size={15} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Title</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4">
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Board Title"
            type="text"
            name="board-title"
          />

          <div className="flex gap-4 justify-end">
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button disabled={isLoading} type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
            <Button
              disabled={isLoading}
              onClick={handleTitleChange}
              type="button"
              className="min-w-32"
            >
              {isLoading ? <Spinner /> : "Edit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeBoardTitleBtn;
