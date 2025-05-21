import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 lg:px-8  pb-20 text-center max-w-[1440px] w-full mx-auto">
      <nav className="py-8 flex justify-between items-center">
        <div className="flex items-center gap-4 ">
          <h2 className="text-4xl font-bold tracking-[-6px]">
            <span className="text-gray-900">N</span>
            <span className="text-gray-500">R</span>
          </h2>
          <h2 className="text-xl font-medium">NextRole</h2>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 px-4 lg:px-8 py-2 rounded-full">
          <Link className="hover:underline" href={"/signup"}>
            Sign Up
          </Link>
          <Link className="hover:underline" href={"/login"}>
            Login
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
        <div>
          <h2 className="text-4xl lg:text-6xl  max-w-xl lg:max-w-4xl mx-auto font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Everything You Need to Track Your Job Hunt
          </h2>
          <p className="mt-4 text-base lg:text-lg max-w-xl font-medium text-gray-500 mx-auto">
            NextRole gives you a powerful set of tools to stay organized,
            motivated, and in control — from first application to final offer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:gap-8 lg:text-start text-white">
          <div className="w-full h-[500px] bg-blue-600 rounded-3xl lg:col-span-2 p-4 ">
            <h3 className="font-semibold text-2xl">Custom Job Boards</h3>
            <p className="max-w-lg">
              Create multiple boards for different goals or career paths. Add,
              delete, and name them as you like.
            </p>
          </div>
          <div className="w-full h-[500px] bg-pink-600 rounded-3xl p-4">
            <h3 className="font-semibold text-2xl">
              Add Detailed Applications
            </h3>
            <p className="max-w-lg">
              Easily log role title, company, job post URL, salary info, and
              descriptions using a clean modal form.
            </p>
          </div>
          <div className="w-full h-[500px] bg-yellow-600 rounded-3xl p-4">
            <h3 className="font-semibold text-2xl">Visual Progress Tracker</h3>
            <p className="max-w-lg">
              Move job cards between stages: Wishlist, Applied, Interview, Offer
              — or create your own stages.
            </p>
          </div>
          <div className="w-full h-[500px] bg-violet-600 rounded-3xl lg:col-span-2 p-4">
            <h3 className="font-semibold text-2xl">
              Edit & Manage Applications
            </h3>
            <p className="max-w-lg">
              Click to view full details, edit entries, or remove jobs with
              intuitive controls.
            </p>
          </div>
          <div className="relative w-full h-[500px] bg-gray-600 rounded-3xl md:col-span-2 lg:col-span-3">
            <div className="absolute p-4">
              <h3 className="font-semibold text-2xl">
                Authentication & Secure Data
              </h3>
              <p className="max-w-lg">
                Sign up and sign in to safely access your job boards from
                anywhere.
              </p>
            </div>
            <video
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              playsInline
              loop
              muted
            >
              <source
                src="https://framerusercontent.com/assets/QQfNmqxefE6NsOmdr5XMvhaueCY.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}
