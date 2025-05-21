import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <header className="lg:h-screen h-16 bg-gray-100 lg:max-w-[250px] w-full p-4">
      <nav className="hidden lg:block">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-[-3px]">
            <span className="text-blue">Next</span>
            <span className="text-gray-500">Role</span>
          </h2>
        </div>

        <ul className="font-semibold text-gray-500 text-sm grid gap-2">
          <li className="bg-black text-white p-2 rounded-md">
            <Link href={"#"}>Home</Link>
          </li>
          <li className=" text-gray-500 hover:bg-gray-200 p-1 rounded-md">
            <Link href={"#"}>
              <span></span> <span>Settings</span>
            </Link>
          </li>
        </ul>

        <ul className="mt-8 border-y py-8 ">
          <li className="flex font-medium text-xs items-center justify-between mb-4">
            <span>My Job Boards</span>
            <button className="cu ">
              <CirclePlus size={20} />
            </button>
          </li>
          <li className="hover:bg-gray-200 p-1 rounded-md">
            <Link href={"#"} className="text-gray-500 text-sm font-medoiun ">
              <span></span> <span>Job Search 2025</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
