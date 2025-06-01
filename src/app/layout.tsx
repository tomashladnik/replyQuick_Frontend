import { NavbarWrapper } from "@/components/navigation/NavbarWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReplyQuick AI",
  description: "AI-powered messaging platform for businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-col">
          <NavbarWrapper />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
