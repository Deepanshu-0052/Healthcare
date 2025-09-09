import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">HealthCare</h3>
          <p>
            Your trusted healthcare partner. Providing professional care and
            personalized services for all your health needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-blue-500 transition">
                Doctors
              </a>
            </li>
            <li>
              <a href="#appointment" className="hover:text-blue-500 transition">
                Appointments
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
