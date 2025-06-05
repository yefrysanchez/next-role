"use client"
import EmailSignUp from "@/components/signup/EmailSignUp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const SignUpOptions = () => {
  const [emailSignUp, setEmailSignUp] = useState(false);

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
            <Button onClick={() => setEmailSignUp(true)} variant="outline" className="w-full cursor-pointer">
              Sign Up with Email
            </Button>
            <Button variant="outline" className="w-full cursor-pointer">
              Sign Up with Google
            </Button>
            <Button variant="outline" className="w-full cursor-pointer">
              Sign Up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-sm flex gap-1 justify-center">
            Already have an account?
            <Link
              href="/login"
              className="hover:underline font-semibold text-black underline-offset-4"
            >
              Log in
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export default SignUpOptions
