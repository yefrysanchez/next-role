import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const UserInfo = () => {
  return (
    <form className="grid gap-6 pt-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <label htmlFor="first-name" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">First Name</span>{" "}
          <Input required />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Last Name</span>{" "}
          <Input required />
        </label>
      </div>
      <label htmlFor="email" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Email</span> <Input required />
      </label>
      <label htmlFor="bio" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Bio</span>{" "}
        <Textarea className="min-h-[100px]" />
      </label>
      <label htmlFor="website" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Website</span> <Input />
      </label>
      <label htmlFor="email" className="flex flex-col gap-2">
        <span className="font-semibold text-sm">Location</span> <Input />
      </label>
      <Button className="w-fit mx-auto" type="button">
        Save Changes
      </Button>
    </form>
  );
};

export default UserInfo;
