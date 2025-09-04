"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createAuthClient } from "better-auth/react";
import Spinner from "../Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";


const { useSession } = createAuthClient();

const ChangePicture = () => {
  const {
    data: session,
    isPending, // loading state
    // error, // error object
    // refetch, // refetch the session
  } = useSession();

  // Skeleton Loader for Avatar and Form Fields
  if (isPending) {
    return (
      <div>
        <div>
          <h2 className="font-bold text-2xl tracking-tighter">
            Profile Information
          </h2>
          <p className="font-medium text-muted-foreground">
            Update your personal information and profile picture
          </p>
        </div>
        <form className="flex items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-xl" /> {/* Skeleton for Avatar */}
          <div className="grid gap-2">
            <Skeleton className="h-5 w-40" /> {/* Skeleton for Label */}
            <Skeleton className="h-8 w-full rounded-md" /> {/* Skeleton for File Input */}
            <Skeleton className="h-3 w-40" /> {/* Skeleton for File Input Text */}
            <Skeleton className="h-10 w-[100px]" /> {/* Skeleton for Button */}
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl tracking-tighter">
          Profile Information
        </h2>
        <p className="font-medium text-muted-foreground">
          Update your personal information and profile picture
        </p>
      </div>
      <form className="flex items-center gap-4">
        <div className="h-20 w-20 bg-gray-200 rounded-xl overflow-hidden">
          <Avatar className="h-full w-full object-cover rounded-lg">
            <AvatarImage
              src={session?.user.image || "/placeholder.webp"}
              alt={session?.user.name}
            />
            <AvatarFallback className="rounded-lg">
              <AvatarImage
                src={"/placeholder.webp"}
                alt={session?.user.name}
              />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="picture">
            <Camera className="text-gray-500" size={18} />{" "}
            <span>Change Picture</span>
          </Label>
          <Input
            accept="image/png,image/jpeg,image/webp,image/jpg"
            id="picture"
            type="file"
          />
          <p className="text-xs font-semibold text-muted-foreground">
            JPG, JPEG, WEBP or PNG. Max size 2MB.
          </p>
          <Button
            disabled={isPending}
            type="button"
            className="max-w-[100px] w-full"
          >
            {isPending ? <Spinner /> : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePicture;
