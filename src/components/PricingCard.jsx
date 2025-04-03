import React from "react";

const PricingCard = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "199",
      features: [
        "Initial Legal Consultation",
        "Basic Document Review",
        "Phone Support",
        "Single Case Management",
        "Monthly Updates",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "399",
      features: [
        "Everything in Basic",
        "Priority Consultation",
        "Advanced Document Review",
        "24/7 Phone Support",
        "Multiple Case Management",
        "Weekly Updates",
        "Legal Research Access",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "899",
      features: [
        "Everything in Professional",
        "Dedicated Legal Team",
        "Unlimited Consultations",
        "Complete Documentation",
        "Emergency Support",
        "Daily Updates",
        "Corporate Legal Coverage",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 ">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your legal needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadown-lg p-8 relative ${
                plan.isPopular ? "border-2 border-blue-500" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
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
                    ? "bg-blue-600 text-white "
                    : "bg-gray-100 text-gray-900"
                }
                `}
              >
                Pick This Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
