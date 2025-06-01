// 'use client'
// import { Menu, X } from "lucide-react";
// import { Poppins } from "next/font/google";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
// });

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const isActive = (path: string) => {
//     return pathname === path ? "text-black" : "text-gray-600";
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="container mx-auto px-6 py-6 flex items-center justify-between relative">
//       <Link href="/" className="flex items-center">
//         <span className={`${poppins.className} text-2xl font-bold ml-2`}>ReplyQuick AI</span>
//       </Link>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex items-center space-x-8">
//         <Link 
//           href="/" 
//           className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/")}`}
//         >
//           Home
//         </Link>
//         <Link 
//           href="/how-it-works" 
//           className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/how-it-works")}`}
//         >
//           How It Works?
//         </Link>
//         <Link 
//           href="/case-studies" 
//           className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/case-studies")}`}
//         >
//           Case Studies
//         </Link>
//         <Link 
//           href="/faq" 
//           className={`${poppins.className} text-sm font-medium hover:text-black transition-colors ${isActive("/faq")}`}
//         >
//           FAQ
//         </Link>
//       </nav>

//       {/* Desktop CTA Button */}
//       <Link 
//         href="/book-demo" 
//         className={`hidden md:block ${poppins.className} bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors`}
//       >
//         Book A Demo
//       </Link>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={toggleMobileMenu}
//         className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
//         aria-label="Toggle mobile menu"
//       >
//         {isMobileMenuOpen ? (
//           <X className="h-6 w-6" />
//         ) : (
//           <Menu className="h-6 w-6" />
//         )}
//       </button>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
//           <nav className="flex flex-col p-4 space-y-4">
//             <Link 
//               href="/" 
//               className={`${poppins.className} text-base font-medium hover:text-black transition-colors ${isActive("/")}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/how-it-works" 
//               className={`${poppins.className} text-base font-medium hover:text-black transition-colors ${isActive("/how-it-works")}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               How It Works?
//             </Link>
//             <Link 
//               href="/case-studies" 
//               className={`${poppins.className} text-base font-medium hover:text-black transition-colors ${isActive("/case-studies")}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Case Studies
//             </Link>
//             <Link 
//               href="/faq" 
//               className={`${poppins.className} text-base font-medium hover:text-black transition-colors ${isActive("/faq")}`}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               FAQ
//             </Link>
//             <Link 
//               href="/book-demo" 
//               className={`${poppins.className} bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-center`}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Book A Demo
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar; 