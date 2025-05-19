import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <nav>
        <div>
          <h2 className="text-3xl font-bold tracking-[-3px]">
            <span className="text-blue">Next</span>
            <span className="text-gray-500">Role</span>
          </h2>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-blue">
          Your Job Hunt, <br /> Organized.
        </h1>
        <p className="mt-4 text-base lg:text-lg max-w-xl font-medium text-gray-500">
          NextRole helps you track every job you apply for — from wishlist to
          offer. Built for developers, job seekers, and career switchers who
          want clarity, progress, and results.
        </p>
        <Button className="mt-8 h-12 w-48 text-base lg:text-lg rounded-lg bg-blue text-white hover:bg-blue-600 font-bold cursor-pointer">
          Sign Up for Free
        </Button>
      </div>
    </main>
  );
}
