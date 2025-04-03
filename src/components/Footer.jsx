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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BD Law</h3>
            <p className="mb-4">
              Providing expert legal solutions with integrity and dedication to
              justice.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Civil Law
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Corporate Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaPhone className="mr-2" /> +1 (234) 567-8900
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> info@bdlaw.com
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 123 Legal Street, City,
                State 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} BD Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
