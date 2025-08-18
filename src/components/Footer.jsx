import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Website Name & Logo */}
        <div className="flex justify-center items-center gap-3">
          <img src={logo} alt="Munchy Magic" className="w-8 h-8" />
          <h2 className="text-xl font-bold">Munchy Magic</h2>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm">
          © {new Date().getFullYear()} Munchy Magic. All rights reserved.
        </p>

        {/* Contact Information */}
        <div className="text-sm">
          <p>
            Email:{" "}
            <a href="mailto:contact@munchymagic.com" className="text-primary">
              contact@munchymagic.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="text-primary">
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
