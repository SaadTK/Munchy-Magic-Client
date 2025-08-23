import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-100 via-yellow-200 to-amber-100 text-gray-800 py-10 mt-20 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Logo & Brand Name */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center">
          <img
            src={logo}
            alt="Munchy Magic"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
            Munchy Magic
          </h2>
        </div>

        {/* Contact Info */}
        <div className="text-sm sm:text-base space-y-1">
          <p>
            Email:{" "}
            <a
              href="mailto:contact@munchymagic.com"
              className="text-amber-600 hover:underline break-words"
            >
              contact@munchymagic.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-amber-600 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 text-2xl text-amber-700">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Munchy Magic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
