import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div
      className="
    fixed top-0 left-0 w-full backdrop-blur-md bg-[#0c4525] shadow-lg 
    z-50
    "
    >
      <div
        className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        "
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#d1ab68] ">BD Law</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href={"/"}
                className="text-[#d1ab68] hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="text-[#d1ab68] hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="text-[#d1ab68] hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href={"/services"}
                className="text-[#d1ab68] hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button
              className="bg-[#d1ab68]  text-[#white]
                    px-4 py-2 rounded-md text-sm font-medium transition duration-300
                    "
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
