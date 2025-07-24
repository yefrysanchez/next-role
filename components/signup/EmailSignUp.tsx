"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Card } from "../ui/card";
import { validatePassword } from "@/lib/helpers";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

const EmailSignUp = () => {
  const [error, setError] = useState<null | string | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const user = {
      firstName: formData.get("first-name")?.toString(),
      lastName: formData.get("last-name")?.toString(),
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    if (!user.firstName || !user.lastName) {
      setError("First name and last name are required.");
      return;
    }

    if (/[0-9]/.test(user.firstName) || /[0-9]/.test(user.lastName)) {
      setError("First name or last name cannot include numbers.");
      return;
    }

    if (!user.email) {
      setError("email is required.");
      return;
    }
    if (!user.password) {
      setError("Password is required.");
      return;
    }

    if (validatePassword(user.password, setError)) {
      return;
    }

    const { error } = await authClient.signUp.email(
      {
        email: user.email,
        password: user.password,
        name: `${user.firstName} ${user.lastName}`,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          setIsLoading(false);
          // redirect the user after successful sign-up (and sign-in)
          router.push("/boards");
        },
        onError: (ctx) => {
          setIsLoading(false);
          // display the error message
          setError(ctx.error.message);
        },
      }
    );
    if (error) {
      setIsLoading(false);
      setError(error.message);
    }

  };

  return (
    <Card className="w-full max-w-md p-6">
      <div>
        <h1 className="font-bold tracking-tighter text-3xl text-center text-black">
          Sign Up for Free
        </h1>
        <p className="font-medium text-center text-gray-400">
          Organize your job search
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl grid gap-6 mt-8"
      >
        <div className="flex gap-x-2 w-full">
          <Input
            name="first-name"
            type="text"
            id="first-name"
            placeholder="First Name"
            className="w-full"
            required
          />
          <Input
            name="last-name"
            type="text"
            id="last-name"
            placeholder="Last Name"
            className="w-full"
            required
          />
        </div>
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          className="w-full"
          required
        />
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          className="w-full"
          required
        />
        <p className="text-xs">
          <span className="font-bold">* At least:</span> 8 characters, 1
          numbers, 1 upper, 1 lower
        </p>

        {error && (
          <p className="text-xs text-red-600 font-bold text-center">{error}</p>
        )}

        <Button disabled={isLoading} className="w-full">
          {isLoading ? <Spinner /> : "Create Account"}
        </Button>
        <div className="mt-4 text-sm flex gap-1 justify-center">
          Already have an account?
          <Link
            href="/signin"
            className="hover:underline font-semibold text-black underline-offset-4"
          >
            Sign In
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default EmailSignUp;
