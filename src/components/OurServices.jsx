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
      title: "Civil Law",
      description:
        "Expert representation in civil disputes, contracts, and personal matters",
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Family Law",
      description:
        "Compassionate guidance through divorce, custody, and family issues",
    },
    {
      icon: <FaGavel className="w-12 h-12" />,
      title: "Criminal Law",
      description:
        "Strong defense strategies and experienced criminal representation",
    },
    {
      icon: <FaFileContract className="w-12 h-12" />,
      title: "Corporate Law",
      description:
        "Comprehensive business law services and corporate compliance",
    },
    {
      icon: <FaUserTie className="w-12 h-12" />,
      title: "Employment Law",
      description:
        "Protection of worker rights and employment dispute resolution",
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Real Estate Law",
      description: "Expert handling of property transactions and disputes",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 ">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 ">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive Legal Solutions tailored to your needs
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
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
