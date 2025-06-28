"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { config } from "dotenv";
import { authClient } from "@/lib/auth-client";

import { toast } from "sonner";

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
import Spinner from "../Spinner";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { getSlug } from "@/lib/helpers";
config({ path: ".env" });

const CreateBoard = () => {
  const [isloading, setIsloading] = useState(false);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleCreateBoard = async () => {
    setIsloading(true);
    const id = uuidv4();
    try {
      const res = await fetch(`${apiUrl}/boards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          id,
          userId: session?.user.id,
          slug: getSlug(id, title),
        }),
      });
      if (!res) {
        throw new Error("Error creating board, Please try later.");
      }
      setOpen(false);
      toast(`${title} board was created successfully.`);
    } catch (error) {
      console.error("Error creating board:", error);
      setIsloading(false);
      toast.error("An error occurred while creating the board.");
    } finally {
      router.refresh();
      setIsloading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
            type="text"
            name="board-title"
          />

          <div className="flex gap-4 justify-end">
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button disabled={isloading} type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
            <Button
              disabled={isloading}
              onClick={handleCreateBoard}
              type="button"
              className="min-w-32"
            >
              {isloading ? <Spinner /> : "Create Board"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBoard;
