"use server";

import SignUpOptions from "@/components/signup/SignUpOptions";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";


const Page = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if( session){
    return redirect("/boards")
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-10">
     <SignUpOptions />
    </main>
  );
};

export default Page;
