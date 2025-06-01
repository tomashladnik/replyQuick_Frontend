"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
                <span className={`${poppins.className} text-xl md:text-2xl font-bold ml-2`}>ReplyQuick AI</span>
            </Link>
          </div>

          {/* CTA Button */}
          <button className="w-full md:w-auto bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm md:text-base">
            Request a Demo
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-gray-800">
          <div className="text-xs md:text-sm font-poppins text-gray-400 mb-4 md:mb-0">
            ©2025 All Rights Reserved
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6">
            <Link href="https://x.com/ReplyQuickAI" className="text-gray-400 hover:text-white transition-colors">
              <FaXTwitter className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
 
            <Link href="https://www.linkedin.com/company/replyquickai/" className="text-gray-400 hover:text-white transition-colors">
              <ImLinkedin className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="https://www.instagram.com/replyquick.ai" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
            <Link href="https://www.youtube.com/@replyquickai" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 