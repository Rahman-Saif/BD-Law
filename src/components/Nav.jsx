import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0c4525]/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-[#d1ab68]/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#d1ab68]">জাগ্রত</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href={"/"}
                className="text-[#d1ab68] hover:text-[#d1ab68]/70 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                হোম
              </Link>
              <Link
                href={"/about"}
                className="text-[#d1ab68] hover:text-[#d1ab68]/70 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href={"/contact"}
                className="text-[#d1ab68] hover:text-[#d1ab68]/70 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                যোগাযোগ
              </Link>
              <Link
                href={"/services"}
                className="text-[#d1ab68] hover:text-[#d1ab68]/70 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                সেবাসমূহ
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-[#d1ab68] hover:bg-[#d1ab68]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg">
              আরও জানুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
