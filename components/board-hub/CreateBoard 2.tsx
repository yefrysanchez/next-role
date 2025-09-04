"use client";
import { Plus } from "lucide-react";
import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreateBoard = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col min-h-[210px] h-full gap-4 justify-center items-center bg-gray-100 p-8 rounded-2xl hover:bg-gray-200 cursor-pointer">
          <h3 className="font-semibold text-2xl text-center">
            Create New Board
          </h3>
          <Plus size={50} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Create a new board</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4">
          <Input placeholder="Board Title" type="text" name="board-title" />

          <div className="flex gap-4 justify-end">
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBoard;
