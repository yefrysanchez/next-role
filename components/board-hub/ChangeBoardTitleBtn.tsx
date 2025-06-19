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

type ChangeBoardTitleBtnTypes = {
  id: string;
  title: string;
};

const ChangeBoardTitleBtn = ({ id, title }: ChangeBoardTitleBtnTypes) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/boards`;
  const [isLoading, setIsLoading] = useState(false);

  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = async () => {
    setIsLoading(true);
    if (newTitle === title) {
      toast.error("Title is not changed.");
      return;
    }
    if (newTitle === "") {
      toast.error("Title can't be empty.");
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
      console.log(res)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("An error occurred:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex justify-center items-center border h-full w-10 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
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
