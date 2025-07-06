"use client";
import { Button } from "./ui/button";
import { toast } from "sonner";

const SignUpBtn = () => {
  const handleSignUp = async () => {
    toast.info("This feature is not available yet.");
  };

  return (
    <Button onClick={handleSignUp} type="button" className="w-full">
      Create Account
    </Button>
  );
};

export default SignUpBtn;
