import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShelfWhiz - Smart Warehouse Changeover Solution",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <nav className="bg-white shadow-md fixed w-full z-20 top-0" style={{ paddingTop: 'env(safe-area-inset-top, 20px)', paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between py-6 sm:py-4">
            <Link href="/" className="mb-2 sm:mb-0">
              <span className="text-xl font-bold text-blue-600">
                Shelf<span className="text-gray-800">Whiz™</span>
              </span>
            </Link>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 w-full sm:w-auto ml-0 sm:ml-8">
              <Link
                href="/#features"
                className="text-gray-700 hover:text-blue-600 transition py-1"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 transition py-1"
              >
                Pricing
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-700 hover:text-blue-600 transition py-1"
              >
                Testimonials
              </Link>
              <Link
                href="/documents"
                className="text-gray-700 hover:text-blue-600 transition py-1"
              >
                Resources
              </Link>
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition text-center md:w-auto w-full"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-48 pb-20 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'calc(12rem + env(safe-area-inset-top, 80px))' }}>
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">Streamlining Changeovers Since 2021</p>
            <p className="text-gray-400 text-sm mt-2">
              &copy; 2025 ShelfWhiz. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}