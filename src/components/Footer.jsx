import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#138545]  text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">বিডি ল</h3>
            <p className="mb-4">
              সততা এবং ন্যায়বিচারের প্রতি অঙ্গীকার নিয়ে বিশেষজ্ঞ আইনি সমাধান
              প্রদান করছি।
            </p>
            <div className="flex space-x-4">
              {/* Social media icons remain unchanged */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              দ্রুত লিঙ্কসমূহ
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  সেবাসমূহ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              আমাদের সেবাসমূহ
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  দেওয়ানি আইন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  ফৌজদারি আইন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  পারিবারিক আইন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  কর্পোরেট আইন
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              যোগাযোগ করুন
            </h4>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaPhone className="mr-2" /> +৮৮০ ১৭১২ ৩৪৫৬৭৮
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> info@bdlaw.com
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> ১২৩ লিগ্যাল স্ট্রিট, ঢাকা,
                বাংলাদেশ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            স্বত্ব © {new Date().getFullYear()} বিডি ল। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
