import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 text-primary">Munchy Magic</h2>
        <p>© 2025 Munchy Magic. All rights reserved.</p>
        <p>Contact us: support@munchymagic.com | +123 456 7890</p>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
