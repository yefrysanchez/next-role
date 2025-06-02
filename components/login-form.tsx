"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "@/server/users";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: `${window.location.origin}/boards`,
    });
  };

  const handleLoginWithEmail = async(formData: FormData) => {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    try {
      await signIn({ email, password });

    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (e.g., show a notification)
    } finally {
      redirect("/boards") // Redirect to boards after successful login
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold tracking-tighter text-2xl text-center text-black">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="username@email.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••"
                  required
                />
              </div>
              <Button onClick={() => handleLoginWithEmail} type="button" className="w-full">
                Login
              </Button>
              <div className="flex items-center gap-4">
                <div className="h-1 w-full bg-soft-gray rounded-lg"></div>
                <span className="text-sm font-bold tracking-tighter">or</span>
                <div className="h-1 w-full bg-soft-gray rounded-lg"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="button"
                  onClick={handleLoginWithGoogle}
                  variant="outline"
                  className="w-full"
                >
                  Login with Google
                </Button>
                <Button variant="outline" className="w-full">
                  Login with GitHub
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="hover:underline underline-offset-4 font-bold"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
