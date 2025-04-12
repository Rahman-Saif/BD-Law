import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 w-full h-full "
        style={{
          backgroundImage: "url(/banner1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            আপনার বিশ্বস্ত আইনি সহযোগী
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            আমরা ব্যবসা, ব্যক্তি ও পরিবারের জন্য সম্পূর্ণ আইনি সমাধান প্রদান
            করি।
          </p>
          <div className="flex gap-4">
            <button
              className="bg-[#138545] text-white px-8 py-3 
                rounded-md text-lg font-medium transition duration-300
                "
            >
              শুরু করুন
            </button>
            <button
              className="border-2 border-white  text-white px-8 py-3 
                rounded-md text-lg font-medium transition duration-300
                "
            >
              আরও জানুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
