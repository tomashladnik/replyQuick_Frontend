'use client';
import { usePathname } from 'next/navigation';
import HomeNavbar from './HomeNavbar';
import MainNavbar from './MainNavbar';

export function NavbarWrapper() {
  const pathname = usePathname();
  
  // Show HomeNavbar on the homepage and marketing pages
  const isHomePage = pathname === '/';
  const isMarketingPage = ['/features', '/pricing', '/about', '/contact'].includes(pathname);
  
  if (isHomePage || isMarketingPage) {
    return <HomeNavbar />;
  }
  
  // Show MainNavbar everywhere else
  return <MainNavbar />;
} 