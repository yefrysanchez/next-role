import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const EmailSignUp = () => {
  return (
    <>
      <div>
        <h1 className="font-bold tracking-tighter text-4xl text-center text-black">
          Sign Up for Free
        </h1>
        <p className="font-medium text-xl text-center text-gray-400">
          Organize your job search
        </p>
      </div>
      <form className="w-full max-w-3xl grid gap-6 mt-8">
        <div className="flex gap-x-2 w-full">
          <Input
            type="text"
            id="first-name"
            placeholder="First Name"
            className="w-full"
            required
          />
          <Input
            type="text"
            id="last-name"
            placeholder="Last Name"
            className="w-full"
            required
          />
        </div>
        <Input
          type="text"
          id="email"
          placeholder="Email"
          className="w-full"
          required
        />
        <Input
          type="text"
          id="password"
          placeholder="Password"
          className="w-full"
          required
        />
        <p className="text-xs">
          <span className="font-bold">* At least:</span> 8 characters, 1
          numbers, 1 upper, 1 lower
        </p>

        <Button type="submit" className="w-full cursor-pointer font-bold">
          Create Account
        </Button>
        <div className="mt-4 text-sm flex gap-1 justify-center">
          Already have an account?
          <Link
            href="/login"
            className="hover:underline font-semibold text-black underline-offset-4"
          >
            Log in
          </Link>
        </div>
      </form>
    </>
  );
};

export default EmailSignUp;
