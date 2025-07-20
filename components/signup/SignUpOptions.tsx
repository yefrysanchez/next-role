"use client";
import EmailSignUp from "@/components/signup/EmailSignUp";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const SignUpOptions = () => {
  const [emailSignUp, setEmailSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: `${window.location.origin}/boards`,
    });
  };

  const handleLoginWithGithub = async () => {
    setIsLoading(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: `${window.location.origin}/boards`,
    });
  };

  return (
    <>
      {emailSignUp ? (
        <section>
          <EmailSignUp />
        </section>
      ) : (
        <section className="max-w-sm w-full grid gap-8">
          <div>
            <h1 className="font-bold tracking-tighter text-4xl text-center text-black">
              Sign Up for Free
            </h1>
            <p className="font-medium text-xl text-center text-gray-400">
              Organize your job search
            </p>
          </div>
          <div className="grid gap-3">
            <Button
              onClick={() => setEmailSignUp(true)}
              variant="outline"
              className="w-full cursor-pointer"
              disabled={isLoading}
              type="button"
            >
              Sign Up with Email
            </Button>
            <Button
              onClick={handleLoginWithGoogle}
              disabled={isLoading}
              variant="outline"
              className="w-full cursor-pointer"
              type="button"
            >
              Sign Up with Google
            </Button>
            <Button
              onClick={handleLoginWithGithub}
              disabled={isLoading}
              variant="outline"
              className="w-full cursor-pointer"
              type="button"
            >
              Sign Up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-sm flex gap-1 justify-center">
            Already have an account?
            <Link
              href="/signin"
              className="hover:underline font-semibold text-black underline-offset-4"
            >
              Sign In
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUpOptions;
