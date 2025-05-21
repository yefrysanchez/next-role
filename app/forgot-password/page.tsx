import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="text-center max-w-md">
        <h1 className="font-bold text-3xl">Forgot your password?</h1>
        <p className="text-muted-foreground text-sm">
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </p>
        <form className="mt-8 grid gap-4">
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="bg-white"
          />

          <Button className="w-full font-medium" type="submit">
            Reset password
          </Button>
        </form>
        <Link className="mt-8 text-sm inline-block hover:underline" href={"/login"}>Back to login</Link>
      </section>
    </main>
  );
};

export default page;
