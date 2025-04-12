"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "আপনারা কোন কোন আইনি ক্ষেত্রে বিশেষজ্ঞ?",
      answer:
        "আমরা কর্পোরেট আইন, পারিবারিক আইন, দেওয়ানি মামলা, ফৌজদারি মামলা, স্থাবর সম্পত্তি আইন এবং শ্রম আইনসহ বিভিন্ন ক্ষেত্রে বিশেষজ্ঞ। আমাদের অভিজ্ঞ আইনজীবী দল এই সকল ক্ষেত্রে সম্পূর্ণ আইনি সমাধান প্রদান করে থাকে।",
    },
    {
      question: "কিভাবে পরামর্শের জন্য সময় নির্ধারণ করব?",
      answer:
        "আপনি আমাদের অফিসে ফোন করে, অনলাইন ফরম পূরণ করে, অথবা সরাসরি ইমেইল করে পরামর্শের জন্য সময় নির্ধারণ করতে পারেন। আমরা আপনার সুবিধার্থে সরাসরি এবং ভার্চুয়াল উভয় ধরনের পরামর্শ প্রদান করি।",
    },
    {
      question: "আপনাদের ফি কাঠামো কেমন?",
      answer:
        "আমাদের ফি কাঠামো মামলার ধরন এবং প্রয়োজনীয় সেবার উপর নির্ভর করে। আমরা নমনীয় পেমেন্ট প্ল্যান, নির্দিষ্ট বিষয়ে ফ্ল্যাট রেট সেবা এবং ঘণ্টাভিত্তিক বিলিং অপশন প্রদান করি। প্রাথমিক পরামর্শের সময় আমরা আপনার মামলার জন্য উপযুক্ত ফি কাঠামো নিয়ে আলোচনা করব।",
    },
    {
      question: "একটি সাধারণ মামলা শেষ হতে কত সময় লাগে?",
      answer:
        "মামলার সময়সীমা এর জটিলতা, সংশ্লিষ্ট পক্ষসমূহ এবং আদালতের সময়সূচীর উপর নির্ভর করে পরিবর্তিত হয়। পরামর্শের সময় আমরা আপনার নির্দিষ্ট পরিস্থিতি বিবেচনা করে একটি সুনির্দিষ্ট সময়সীমা প্রদান করতে পারব।",
    },
    {
      question: "আপনারা কি জরুরি আইনি সেবা প্রদান করেন?",
      answer:
        "হ্যাঁ, আমরা জরুরি বিষয়ে আইনি সেবা প্রদান করি। আমাদের দল তাৎক্ষণিক আইনি মনোযোগ প্রয়োজন এমন জরুরি পরিস্থিতির জন্য ২৪/৭ উপলব্ধ।",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#138545]">সচরাচর জিজ্ঞাসা</h2>
          <p className="mt-4 text-lg text-gray-600">
            আমাদের সেবা সম্পর্কিত সাধারণ প্রশ্নের উত্তর খুঁজুন
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`px-6 py-4 bg-gray-50 transition-all duration-200 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-[#138545]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2025/02/02/15/20250202155627-HZTE2PYM.js"></script>
    </div>
  );
};

export default FAQ;
