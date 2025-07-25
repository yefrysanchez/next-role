"use server";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/boards");
  }

  return (
    <main className="px-4 lg:px-8  pb-20 text-center max-w-[1440px] w-full mx-auto">
      <nav className="py-8 flex justify-between items-center">
        <div className="flex items-center gap-1 ">
          <div>
            <Image height={20} width={32} src={"/logo.png"} alt="Logo" />
          </div>
          <h2 className="text-xl font-medium tracking-tighter">
            <span className="font-semibold">Next</span>
            <span className="font-semibold text-gray-500">Role</span>
          </h2>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 px-4 lg:px-8 py-2 rounded-full">
          <Link className="hover:underline" href={"/signup"}>
            Sign Up
          </Link>
          <span>|</span>
          <Link className="hover:underline" href={"/signin"}>
            Sign In
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:lg:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent py-4">
          Your Job Hunt, <br /> Organized.
        </h1>
        <p className="mt-4 text-base lg:text-lg max-w-xl font-medium text-gray-500">
          NextRole helps you track every job you apply for — from wishlist to
          offer. Built for developers, job seekers, and career switchers who
          want clarity, progress, and results.
        </p>
        <Button className="mt-8 h-12 w-48 text-base lg:text-lg rounded-3xl bg-gray-600 text-white hover:bg-gray-700 font-bold cursor-pointer">
          Sign Up for Free
        </Button>
      </section>
      <section className="mt-12 rounded-3xl overflow-hidden">
        <video className="aspect-video w-full" autoPlay playsInline loop muted>
          <source
            src="https://framerusercontent.com/assets/QQfNmqxefE6NsOmdr5XMvhaueCY.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="mt-12">
        <div className="relative z-10 p-4 lg:p-6">
          <h2 className="text-4xl lg:text-6xl  max-w-xl lg:max-w-4xl mx-auto font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Everything You Need to Track Your Job Hunt
          </h2>
          <p className="mt-4 text-base lg:text-lg max-w-xl font-medium text-gray-500 mx-auto">
            NextRole gives you a powerful set of tools to stay organized,
            motivated, and in control — from first application to final offer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mt-8 lg:gap-6 lg:text-start text-white ">
          <div className="w-full relative h-[500px] rounded-3xl overflow-hidden bg-[url(/board.png)] bg-cover bg-center lg:bg-top lg:col-span-4">
            <div className="relative z-10 p-4 lg:p-6">
              <h3 className="font-semibold text-2xl">Custom Job Boards</h3>
              <p className="max-w-lg z-10">
                Create multiple boards for different goals or career paths. Add,
                delete, and name them as you like.
              </p>
            </div>
            <div className="absolute top-0 left-0 bg-gradient-to-t to-blue-900 from-transparent h-52 w-full z-0"></div>
          </div>
          <div className="w-full relative overflow-hidden h-[500px] rounded-3xl bg-[url(/job-form.png)] bg-cover bg-top lg:col-span-2">
            <div className="relative z-10 p-4 lg:p-6">
              <h3 className="font-semibold text-2xl">
                Add Detailed Applications
              </h3>
              <p className="max-w-lg">
                Easily log role title, company, job post URL, salary info, and
                descriptions using a clean modal form.
              </p>
            </div>
            <div className="absolute top-0 left-0 bg-gradient-to-t to-purple-900 from-transparent h-52 w-full z-0"></div>
          </div>
          <div className="relative overflow-hidden w-full h-[500px] rounded-3xl bg-[url(/stages.png)] bg-cover bg-top bg-no-repeat lg:col-span-3">
            <div className="relative z-10 p-4 lg:p-6">
              <h3 className="font-semibold text-2xl">
                Visual Progress Tracker
              </h3>
              <p className="max-w-lg">
                Move job cards between stages: Applied, Interview, Offer, Closed
                — or create your own stages.
              </p>
            </div>
            <div className="absolute top-0 left-0 bg-gradient-to-t to-cyan-700 from-transparent h-52 w-full z-0"></div>
          </div>
          <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-[url(/manage.png)] bg-cover bg-no-repeat bg-center lg:col-span-3">
            <div className="relative z-10 p-4 lg:p-6">
              <h3 className="font-semibold text-2xl z-10">
                Edit & Manage Applications
              </h3>
              <p className="max-w-lg">
                Click to view full details, edit entries, or remove jobs with
                intuitive controls.
              </p>
            </div>
            <div className="absolute top-0 left-0 bg-gradient-to-t to-red-700 from-transparent h-52 w-full z-0"></div>
          </div>
          <div className="relative overflow-hidden w-full h-[500px] lg:h-[700px] rounded-3xl bg-[url(/auth.png)] bg-cover bg-no-repeat bg-center md:col-span-2 lg:lg:col-span-6">
            <div className="relative z-10 p-4 lg:p-6">
              <h3 className="font-semibold text-2xl">
                Authentication & Secure Data
              </h3>
              <p className="max-w-lg">
                Sign up and sign in to safely access your job boards from
                anywhere.
              </p>
            </div>
            <div className="absolute top-0 left-0 bg-gradient-to-t to-indigo-900 from-transparent h-52 w-full z-0"></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center mt-12">
        <h3 className="text-4xl lg:text-6xl  max-w-xl lg:max-w-4xl mx-auto font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
          Ready to streamline your job search?
        </h3>
        <p className="mt-4 text-base lg:text-lg max-w-xl font-medium text-gray-500">
          Create an account to track, organize, and manage your applications —
          100% free.
        </p>
        <Link
          href={"/signup"}
          className="mt-8 h-12 w-48 flex items-center justify-center text-base lg:text-lg rounded-3xl bg-gray-600 text-white hover:bg-gray-700 font-bold cursor-pointer"
        >
          Sign Up for Free
        </Link>
      </section>
      <Footer />
    </main>
  );
}
