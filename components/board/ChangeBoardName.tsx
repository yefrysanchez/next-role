import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import React from "react";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type ChangeBoardNameType = {
  children: React.ReactNode;
};

const ChangeBoardName = ({ children }: ChangeBoardNameType) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="grid gap-4 bg-white p-2 rounded-lg mb-4 max-w-sm w-full">
        <DialogHeader>
          <DialogTitle className="text-lg">Create a new board</DialogTitle>
        </DialogHeader>
        <form >
          <Input placeholder="Board Title" type="text" name="board-title" />

          <div className="flex gap-4 justify-end mt-2">
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
            <Button type="submit">Change</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeBoardName;
