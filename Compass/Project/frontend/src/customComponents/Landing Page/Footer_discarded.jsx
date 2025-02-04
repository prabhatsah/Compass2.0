import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import Logo from "../Meta/Logo";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="text-gray-400">Connect. Travel. Share.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
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
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">info@compass.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <FaFacebook className="text-2xl hover:text-blue-400 cursor-pointer" />
                <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
                <FaInstagram className="text-2xl hover:text-pink-400 cursor-pointer" />
                <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Compass. All rights reserved.
            </p>
          </div> */}
        </div>
      </footer>
    </>
  );
}
