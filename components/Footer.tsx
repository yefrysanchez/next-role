import { Github, LinkedinIcon, SquareCode } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-[400px] bg-gray-900 px-6 pt-12 pb-8 xl:px-12 flex flex-col justify-between ">
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center mx-auto max-w-7xl w-full">
        <div>
          <h2 className="text-xl font-medium tracking-tighter">
            <span className="font-semibold text-white">Next</span>
            <span className="font-semibold text-gray-400">Role</span>
          </h2>
          <p className="text-white  max-w-md text-sm">
            Streamline your job search with NextRole - the comprehensive
            application tracker that helps you organize, monitor, and optimize
            your career opportunities.
          </p>
        </div>
        <div className="text-white  flex flex-col  items-center">
          <h2 className=" font-semibold text-xl">Connect</h2>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/yefrysanchez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/yefrysanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://yefry.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareCode />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white text-sm flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl w-full">
        <p>© {new Date().getFullYear()} NextRole. All rights reserved.</p>
        <p>Built with ❤️ for job seekers</p>
      </div>
    </footer>
  );
};

export default Footer;
