import React from "react";

const What_we_do = () => {
  return (
    <div className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="group p-6 bg-white text-[#138545] rounded-lg shadow-lg hover:shadow-xl 
            transition-all duration-300
            "
          >
            <div className="text-4xl font-bold  mb-4">০১</div>
            <h3 className="text-2xl font-semibold mb-3">
              পারিবারিক আইন পরামর্শ
            </h3>
            <p className="text-black  mb-4">
              পারিবারিক বিষয়ে জটিলতা নিরসনে বিশেষজ্ঞ আইনি পরামর্শ প্রদান করা
              হয়। আমরা আপনার পরিবারের অধিকার রক্ষায় নিরলসভাবে কাজ করি।
            </p>
            <div className="inline-block relative">
              <span className=" font-medium cursor-pointer">আরও জানুন</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0 bg-blue-600 
                    transition-all duration-300 group-hover:w-full
                    "
              ></span>
            </div>
          </div>
          <div
            className="group p-6 bg-white text-[#138545] rounded-lg shadow-lg hover:shadow-xl 
            transition-all duration-300
            "
          >
            <div className="text-4xl font-bold  mb-4">০২</div>
            <h3 className="text-2xl font-semibold mb-3">মাদক আইন পরামর্শ</h3>
            <p className="text-black mb-4">
              মাদক সংক্রান্ত আইনি জটিলতায় বিশেষজ্ঞ আইনি সহায়তা প্রদান করা হয়।
              আমরা আপনার অধিকার সুরক্ষায় সর্বোচ্চ সহযোগিতা করব।
            </p>
            <div className="inline-block relative">
              <span className=" font-medium cursor-pointer">আরও জানুন</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0 bg-blue-600 
                    transition-all duration-300 group-hover:w-full
                    "
              ></span>
            </div>
          </div>
          <div
            className="group p-6 bg-white rounded-lg text-[#138545] shadow-lg hover:shadow-xl 
            transition-all duration-300
            "
          >
            <div className="text-4xl font-bold  mb-4">০৩</div>
            <h3 className="text-2xl font-semibold mb-3">আইনি পরামর্শ</h3>
            <p className="text-black mb-4">
              আপনার আইনি সমস্যা সমাধানে বিশেষজ্ঞ আইনি পরামর্শ প্রদান করা হয়।
              আমাদের অভিজ্ঞ আইনজীবীগণ আপনাকে সঠিক পথ দেখাবেন।
            </p>
            <div className="inline-block relative">
              <span className=" font-medium cursor-pointer">আরও জানুন</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0 bg-blue-600 
                    transition-all duration-300 group-hover:w-full
                    "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_we_do;
