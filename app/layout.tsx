import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShelfWhiz™ - Smart Warehouse Changeover Solution",
  description:
    "Maximize warehouse efficiency and minimize effort with ShelfWhiz. Accelerate inventory setups, changeovers, and line expansions with optimal SKU placement and AI-driven planning.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md fixed w-full z-20 top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/">
              <span className="text-xl font-bold text-blue-600">
                Shelf<span className="text-gray-800">Whiz™</span>
              </span>
            </Link>
            <div className="hidden md:flex space-x-6 h-full items-center">
              <Link
                href="/#features"
                className="text-gray-700 hover:text-blue-600 transition h-full flex items-center"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 transition h-full flex items-center"
              >
                Pricing
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-700 hover:text-blue-600 transition h-full flex items-center"
              >
                Testimonials
              </Link>
              <Link
                href="/documents"
                className="text-gray-700 hover:text-blue-600 transition h-full flex items-center"
              >
                Resources
              </Link>
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition transform hover:scale-105 shadow-md flex items-center justify-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">{children}</main>
        <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">Streamlining changeovers since 2021</p>
            <p className="text-gray-400 text-sm mt-2">
              &copy; 2025 ShelfWhiz™. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}