import { ArrowRightLeft, ExternalLink, Trash2 } from "lucide-react";
import React from "react";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const JobCard = () => {

  const columns = ["wishlist", "applied", "interview", "offer"]

  return (
    <div className="bg-gray-50  w-full p-4 rounded-md grid gap-1 mx-2 pb-8 group relative hover:bg-gray-100 cursor-pointer">
      <h3 className="text-sm font-semibold">Software Engineer</h3>
      <p className="text-xs font-medium text-muted-foreground">Google Cloud</p>
      <p className="text-green-600 text-xs">$80,000 - $100,000</p>
      <div className="lg:hidden gap-1 flex group-hover:flex absolute right-2 bottom-2">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-gray-100 hover:bg-blue-100 p-1 rounded-sm cursor-pointer"
        >
          <ExternalLink size={15} />
        </a>

        <AlertDialog>
          <AlertDialogTrigger>
            <button
              className="text-red-500 bg-gray-100 hover:bg-red-100 p-1 rounded-sm cursor-pointer "
              type="button"
            >
              <Trash2 size={15} />
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
              <AlertDialogAction className="text-red-500 bg-red-50 hover:bg-red-100 px-8">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="absolute right-2 top-2 lg:hidden">
          <ArrowRightLeft size={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="font-bold">Move to</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {
            columns.map(move => (
              <DropdownMenuItem key={move} className="capitalize">{move}</DropdownMenuItem>
            ))
          }
          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default JobCard;
