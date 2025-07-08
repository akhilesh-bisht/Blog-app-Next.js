import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Left Section: Logo and Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/path/to/your/logo.png" 
              alt="Logo"
              width={180}
              height={60}
            />
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-gray-400">Email: contact@myblog.com</p>
            <p className="text-gray-400">Phone: +123 456 789</p>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;