"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { createAuthClient } from "better-auth/react";
import Spinner from "../Spinner";
import { Skeleton } from "../ui/skeleton";


const { useSession } = createAuthClient();

const UserInfo = () => {
  const {
    data: session,
    isPending, // loading state
    error, // error object
  } = useSession();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");

  // Ensure session is loaded before accessing session data
  useEffect(() => {
    if (session?.user?.name) {
      const nameParts = session.user.name.split(" ");
      setFirstName(nameParts[0]);
      setLastName(nameParts.slice(1).join(" ")); // Join all remaining parts as last name
    }
  }, [session]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to save the changes (e.g., API call to update user info)
    console.log({ firstName, lastName, bio, website, location });
  };

  // Skeleton Loader when session is loading
  if (isPending) {
    return (
      <div className="grid gap-6 pt-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 pt-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <label htmlFor="first-name" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">First Name</span>{" "}
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="first-name"
            required
          />
        </label>
        <label htmlFor="last-name" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Last Name</span>{" "}
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="last-name"
            required
          />
        </label>
      </div>
      <label htmlFor="email" className="flex flex-col gap-2 cursor-not-allowed">
        <span className="font-semibold text-sm">Email</span>{" "}
        <Input
          type="email"
          name="email"
          value={session?.user.email}
          disabled
          required
        />
      </label>
      <label htmlFor="bio" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Bio</span>{" "}
        <Textarea
          className="min-h-[100px]"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us about yourself..."
        />
      </label>
      <label htmlFor="website" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Website</span>{" "}
        <Input
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Your personal or company website"
        />
      </label>
      <label htmlFor="location" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Location</span>{" "}
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where are you based?"
        />
      </label>
      <Button
        disabled={isPending}
        className="max-w-40 w-full mx-auto"
        type="submit"
      >
        {isPending ? <Spinner /> : "Save Changes"}
      </Button>
    </form>
  );
};

export default UserInfo;
