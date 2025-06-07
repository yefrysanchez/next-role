'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from "lucide-react";

const BackBtn = () => {
      const router = useRouter();
  return (
    <button onClick={() => router.back()} className="w-fit flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
      <ArrowLeft size={17} /> <span className="text-sm ">Back</span>
    </button>
  );
};

export default BackBtn;
