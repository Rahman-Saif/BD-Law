import Image from "next/image";
import React from "react";

const AI_Solutions = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className=" mx-auto ">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* left Content */}
          <div className="">
            <div
              className="inline-block bg-blue-100
                    text-blue-600 px-4 py-2 rounded-full mb-6
                    "
            >
              About Company
            </div>
            <h1 className="text-4xl font-bold mb-6">
              Empowering Justice with Legal Solutions
            </h1>
            <p className="text-gray-600 mb-8">
              We are a leading legal technology company dedicated to providing
              innovative and effective solutions for businesses and individuals.
            </p>
            <button
              className="flex items-center gap-2 bg-blue-600 
                    text-white px-6 py-3 rounded-full transition duration-300
                    "
            >
              Discover More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          {/* right content  */}
          <div className="relative">
            <div className="bg-gray-50 w-3xs h-full  p-8 rounded-2xl relative z-10 ">
              <h3 className="text-xl font-semibold mb-4 ">
                Years of experience
              </h3>
              <div className="text-7xl font-bold text-blue-600 flex items-center">
                29
                <span className="text-5xl"></span>
              </div>
            </div>
            <div className="absolute ml-60 right-0 top-0 w-full h-full">
              <Image
                src={"/banner1.jpg"}
                alt="lawyer"
                width={500}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI_Solutions;
