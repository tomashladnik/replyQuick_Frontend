'use client'
import { ChevronDown, Menu, X } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const HomeNavbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "text-black" : "text-gray-600";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePolicies = () => {
    setIsPoliciesOpen(!isPoliciesOpen);
  };

  return (
    <header className="relative z-[99999] ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/" className="flex items-center">
          <span className={`${poppins.className} text-2xl font-bold ml-2`}>ReplyQuick AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/")}`}
          >
            Home
          </Link>
          <Link 
            href="/how-it-works" 
            className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/how-it-works")}`}
          >
            How It Works?
          </Link>
          <Link 
            href="/case-studies" 
            className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/case-studies")}`}
          >
            Case Studies
          </Link>
          <Link 
            href="/faq" 
            className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/faq")}`}
          >
            FAQ
          </Link>
          <div className="relative">
            <button
              onClick={togglePolicies}
              className={`${poppins.className} text-sm font-medium hover:text-black transition-colors flex items-center ${isActive("/policies")}`}
            >
              Policies
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isPoliciesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isPoliciesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <Link 
                  href="/disclaimer" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsPoliciesOpen(false)}
                >
                  Disclaimer
                </Link>
                <Link 
                  href="/privacy-policy" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsPoliciesOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/cookie-policy" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsPoliciesOpen(false)}
                >
                  Cookie Policy
                </Link>
                <Link 
                  href="/llc-data-agreement" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsPoliciesOpen(false)}
                >
                  LLC Data Agreement
                </Link>
                <Link 
                  href="/llc-sub-processor" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsPoliciesOpen(false)}
                >
                  LLC Sub Processor
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA Button */}
        <Link 
          href="/book-demo" 
          className={`hidden md:block ${poppins.className} bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors`}
        >
          Book A Demo
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[99999]">
            <div className="container mx-auto px-6 bg-white h-full">
              <div className="flex justify-between items-center py-4 border-b">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={`${poppins.className} text-2xl font-bold ml-2`}>ReplyQuick AI</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 mt-8">
                <Link 
                  href="/" 
                  className={`${poppins.className} text-lg font-medium hover:text-black transition-colors ${isActive("/")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/how-it-works" 
                  className={`${poppins.className} text-lg font-medium hover:text-black transition-colors ${isActive("/how-it-works")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works?
                </Link>
                <Link 
                  href="/case-studies" 
                  className={`${poppins.className} text-lg font-medium hover:text-black transition-colors ${isActive("/case-studies")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  href="/faq" 
                  className={`${poppins.className} text-lg font-medium hover:text-black transition-colors ${isActive("/faq")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={togglePolicies}
                    className={`${poppins.className} text-lg font-medium hover:text-black transition-colors flex items-center ${isActive("/policies")}`}
                  >
                    Policies
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isPoliciesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isPoliciesOpen && (
                    <div className="pl-4 space-y-2">
                      <Link 
                        href="/disclaimer" 
                        className="block text-base text-gray-700 hover:text-black"
                        onClick={() => {
                          setIsPoliciesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Disclaimer
                      </Link>
                      <Link 
                        href="/privacy-policy" 
                        className="block text-base text-gray-700 hover:text-black"
                        onClick={() => {
                          setIsPoliciesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        href="/cookie-policy" 
                        className="block text-base text-gray-700 hover:text-black"
                        onClick={() => {
                          setIsPoliciesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Cookie Policy
                      </Link>
                      <Link 
                        href="/llc-data-agreement" 
                        className="block text-base text-gray-700 hover:text-black"
                        onClick={() => {
                          setIsPoliciesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        LLC Data Agreement
                      </Link>
                      <Link 
                        href="/llc-sub-processor" 
                        className="block text-base text-gray-700 hover:text-black"
                        onClick={() => {
                          setIsPoliciesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        LLC Sub Processor
                      </Link>
                    </div>
                  )}
                </div>
                <Link 
                  href="/book-demo" 
                  className={`${poppins.className} bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-center`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book A Demo
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeNavbar; 