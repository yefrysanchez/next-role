"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed, Lock } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [viewNew, setViewNew] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="max-w-md w-full">
        <Card className="px-4 py-8">
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl tracking-tighter">Create new password</h1>
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Enter a new password for your account
            </p>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <label htmlFor="new-password">
                <span className="font-semibold text-xs">New Password</span>
                <div className="flex items-center justify-between mt-2 relative rounded-md overflow-hidden">
                  <Input
                  id="new-password"
                  placeholder="Enter new password"
                    className="w-full pr-9"
                    type={viewNew ? "text" : "password"}
                  />
                  <button
                    type="button"
                    className="cursor-pointer absolute right-0 h-full px-2"
                    onClick={() => setViewNew(!viewNew)}
                  >
                    {viewNew ? <EyeClosed /> : <Eye />}
                  </button>
                </div>
              </label>
              <label htmlFor="confirm-password">
                <span className="font-semibold text-xs">Confirm Password</span>
                <div className="flex items-center justify-between mt-2 relative rounded-md overflow-hidden">
                  <Input
                  id="confirm-password"
                  placeholder="Confirm new password"
                    className="w-full pr-9"
                    type={viewConfirm ? "text" : "password"}
                  />
                  <button
                    type="button"
                    className="cursor-pointer absolute right-0 h-full px-2"
                    onClick={() => setViewConfirm(!viewConfirm)}
                  >
                    {viewConfirm ? <EyeClosed /> : <Eye />}
                  </button>
                </div>
              </label>
              <Button className="w-full font-medium" type="submit"><Lock /> <span className="font-semibold">Reset Password</span></Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Page;
