"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";

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

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

const BtnActionColumn = () => {
  const handleDelete = () => {
    console.log("Item deleted");
    // Your delete logic here
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          role="button"
          aria-label="Open actions menu"
          className="cursor-pointer bg-gray-50 hover:bg-gray-100 p-1 rounded-lg"
        >
          <Ellipsis />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-bold">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <button
          className="w-full flex items-center px-2 py-2 text-sm hover:bg-gray-100"
          onClick={() => console.log("Edit")}
        >
          <Dialog>
            <DialogTrigger className="flex items-center">
              <Pencil size={15} className="mr-2" />
              <span>Edit Title</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Board Title</DialogTitle>
              </DialogHeader>
              <form>
                <Input placeholder="Board Title" required className="mb-4" />
                <div className="flex justify-end gap-4">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button type="button" className="px-8">
                      Edit
                    </Button>
                  </DialogClose>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="w-full flex items-center text-red-600 px-2 py-2 text-sm hover:bg-gray-100">
              <Trash2 size={15} className="mr-2 text-red-500" />
              <span>Delete</span>
            </button>
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
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-50 text-red-500 hover:bg-red-100"
                onClick={handleDelete}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BtnActionColumn;
