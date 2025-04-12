import React from "react";

const PricingCard = () => {
  const plans = [
    {
      name: "বেসিক প্ল্যান",
      price: "১৯৯",
      features: [
        "প্রাথমিক আইনি পরামর্শ",
        "মৌলিক ডকুমেন্ট পর্যালোচনা",
        "ফোন সাপোর্ট",
        "একক মামলা ব্যবস্থাপনা",
        "মাসিক আপডেট",
      ],
      isPopular: false,
    },
    {
      name: "প্রফেশনাল",
      price: "৩৯৯",
      features: [
        "বেসিক প্ল্যানের সবকিছু",
        "অগ্রাধিকার পরামর্শ",
        "উন্নত ডকুমেন্ট পর্যালোচনা",
        "২৪/৭ ফোন সাপোর্ট",
        "একাধিক মামলা ব্যবস্থাপনা",
        "সাপ্তাহিক আপডেট",
        "আইনি গবেষণা অ্যাক্সেস",
      ],
      isPopular: true,
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "৮৯৯",
      features: [
        "প্রফেশনাল প্ল্যানের সবকিছু",
        "নিবেদিত আইনি টিম",
        "অসীম পরামর্শ সুবিধা",
        "সম্পূর্ণ ডকুমেন্টেশন",
        "জরুরি সহায়তা",
        "দৈনিক আপডেট",
        "কর্পোরেট আইনি কভারেজ",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#138545] ">মূল্য তালিকা</h2>
          <p className="mt-4 text-lg text-gray-600">
            আপনার আইনি প্রয়োজন অনুযায়ী সর্বোত্তম প্ল্যান বেছে নিন
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadown-lg p-8 relative ${
                plan.isPopular ? "border-2 border-[#138545]" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#138545] text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium 
                transition duration-300 ${
                  plan.isPopular
                    ? "bg-[#138545] text-white "
                    : "bg-gray-100 text-gray-900"
                }
                `}
              >
                এই প্যাকেজটি নিন
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
