import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-20 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
           <img src="./Images/logo.png" alt="" />
              <span className="font-bold text-xl text-[#EB5600] text-900">givemymenu</span>
            </div>
            <p className="mb-4 text-sm max-w-xs">
              Revolutionizing the dining experience with our innovative QR ordering system.
            </p>
            <div className="flex space-x-4 text-orange-500">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-orange-600">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-orange-600">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-orange-600">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Services</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">User Guide</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">How QR Ordering Works</a></li>
              <li><a href="#" className="hover:underline">Troubleshooting Guide</a></li>
              <li><a href="#" className="hover:underline">Order Status</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Kalanki, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-orange-500" />
                <span>+977-12345678</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-500" />
                <span>info@pospro.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock className="text-orange-500" />
                <span>Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" border-t border-pink-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 givemymenu. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Services</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
