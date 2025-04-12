import Image from "next/image";
import React from "react";

const AI_Solutions = () => {
  return (
    <div className="w-9/12 mx-auto ">
      <div className=" mx-auto ">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* left Content */}
          <div className="">
            <div
              className="inline-block bg-blue-100
                    text-[#138545] px-4 py-2 rounded-full mb-6
                    "
            >
              আমাদের সম্পর্কে
            </div>
            <h1 className="text-4xl font-bold mb-6">
              ন্যায়বিচার প্রতিষ্ঠায় আইনি সমাধান
            </h1>
            <p className=" mb-8">
              আমরা একটি শীর্ষস্থানীয় আইনি প্রতিষ্ঠান যা ব্যক্তি ও প্রতিষ্ঠানের
              জন্য উদ্ভাবনী ও কার্যকর আইনি সমাধান প্রদান করে থাকে।
            </p>
            <button
              className="flex items-center gap-2 bg-[#138545]
                    text-white px-6 py-3 rounded-full transition duration-300
                    "
            >
              আরও জানুন
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
            <div className="relative h-[400px] w-full">
              <Image
                src={"/banner1.jpg"}
                alt="lawyer"
                fill
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-[#138545]">
                  অভিজ্ঞতার বছর
                </h3>
                <div className="text-6xl font-bold text-[#138545] flex items-center">
                  ২৯
                  <span className="text-4xl">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI_Solutions;
