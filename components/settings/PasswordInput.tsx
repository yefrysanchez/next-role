"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = {
  placeholder?: string;
};

const PasswordInput = ({ placeholder }: PasswordInputProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        type={show ? "password" : "text"}
        placeholder={placeholder}
        className="w-full pr-8"
      />
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
