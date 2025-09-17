import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi"; // Correct import

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Banner */}
      <div className="bg-[#E77813] text-white py-6 px-4 font-semibold">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text */}
          <p className="text-lg sm:text-2xl font-bold text-center md:text-left">
            Book your Free Consultation Today
          </p>

          {/* Right Buttons */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919310037791"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chat Now
            </a>

            {/* Call Button */}
            <a
              href="tel:+919310037791"
              className="flex items-center bg-[#061C3D] hover:bg-[#0b2a5c] text-white px-4 py-2 rounded-md shadow-md transition"
            >
              <FiPhoneCall className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0a1a3c] text-gray-300 px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <img
            src="/images/cropped-aceyourtest-5-Photoroom.png-Photoroom.png"
            alt="Logo"
            className="mb-4 w-36"
          />
          <p className="text-sm leading-relaxed mb-4">
            AceYourTest is India’s top-rated online coaching platform for GMAT,
            GRE, SAT, and IELTS. Trusted by over 100,000 students, it offers
            personalized mentoring, adaptive learning, and guaranteed score
            improvement.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-white">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">GMAT</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GRE</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">SAT</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Student Reviews</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Courses</a></li>
          </ul>
        </div>

        {/* Location Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Location Info.</h3>
          <p className="text-sm">
            Address: House 946, Gangaari Enclave Rd, Pocket 4, Alaknanda, Delhi
            110019, India
          </p>
          <p className="text-sm mt-2">Phone: +91-9876543210</p>
          <p className="text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:enquiries@aceyourtest.in"
              className="text-orange-400"
            >
              enquiries@aceyourtest.in
            </a>
          </p>

          {/* Map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924020836!2d77.0688971088984!3d28.5272803439359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b2d3b0b0d3%3A0xdee2950d0e6f19c8!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E77813] text-white text-center py-3 text-sm">
        Copyright ©2025 AceYourTest | All Rights Reserved
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919310037791"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Phone Floating Button */}
      <a
        href="tel:+919310037791"
        className="fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <FaPhoneAlt size={26} />
      </a>
    </footer>
  );
};

export default Footer;
