import React from "react";
import {
  FaBalanceScale,
  FaHandshake,
  FaGavel,
  FaFileContract,
  FaUserTie,
  FaBuilding,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaBalanceScale className="w-12 h-12" />,
      title: "দেওয়ানি আইন",
      description:
        "দেওয়ানি মামলা, চুক্তি এবং ব্যক্তিগত বিষয়ে বিশেষজ্ঞ আইনি সেবা প্রদান",
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "পারিবারিক আইন",
      description:
        "বিবাহ বিচ্ছেদ, সন্তানের হেফাজত এবং পারিবারিক বিষয়ে সহানুভূতিশীল আইনি পরামর্শ",
    },
    {
      icon: <FaGavel className="w-12 h-12" />,
      title: "ফৌজদারি আইন",
      description: "শক্তিশালী আইনি কৌশল এবং অভিজ্ঞ ফৌজদারি প্রতিনিধিত্ব",
    },
    {
      icon: <FaFileContract className="w-12 h-12" />,
      title: "কর্পোরেট আইন",
      description: "ব্যবসায়িক আইন সেবা এবং কর্পোরেট আনুগত্য বিষয়ক সমাধান",
    },
    {
      icon: <FaUserTie className="w-12 h-12" />,
      title: "শ্রম আইন",
      description: "শ্রমিক অধিকার সুরক্ষা এবং কর্মক্ষেত্রের বিরোধ নিষ্পত্তি",
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "স্থাবর সম্পত্তি আইন",
      description: "সম্পত্তি লেনদেন এবং বিরোধ সংক্রান্ত বিশেষজ্ঞ সেবা",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 ">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#138545]  ">
            আমাদের সেবাসমূহ
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            আপনার প্রয়োজন অনুযায়ী সম্পূর্ণ আইনি সমাধান
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg 
                        hover:shadow-xl transition-shadow duration-300
                        "
            >
              <div className="text-[#138545] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#138545] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
