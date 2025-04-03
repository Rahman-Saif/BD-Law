"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What areas of law do you specialize in?",
      answer:
        "We specialize in various areas including corporate law, family law, civil litigation, criminal defense, real estate law, and employment law. Our team of experienced attorneys provides comprehensive legal solutions across these practice areas.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling our office, filling out our online contact form, or emailing us directly. We offer both in-person and virtual consultations to accommodate your needs.",
    },
    {
      question: "What are your fee structures?",
      answer:
        "Our fee structures vary depending on the type of case and services required. We offer flexible payment plans, flat-rate services for certain matters, and hourly billing options. During your initial consultation, we'll discuss the most appropriate fee structure for your case.",
    },
    {
      question: "How long does a typical case take?",
      answer:
        "The duration of a case varies significantly depending on its complexity, the parties involved, and court schedules. During your consultation, we can provide a more specific timeline based on your particular situation.",
    },
    {
      question: "Do you offer emergency legal services?",
      answer:
        "Yes, we provide emergency legal services for urgent matters. Our team is available 24/7 for critical situations that require immediate legal attention.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Question
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find Answers to common questions about our services{" "}
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
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
