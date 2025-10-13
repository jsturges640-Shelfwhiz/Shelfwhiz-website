"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Simple SVG icon components
const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Clock = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Users = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const Box = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const Mail = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Send = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

export default function HomePage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="mb-10 md:mb-0 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-balance">
                Accelerate Setups, Changeovers, or Expansions by 40% or more
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-pretty">
                ShelfWhiz accelerates inventory setups, changeovers, reboxes, and line expansions by identifying optimal
                SKU placement ahead of time, reducing labor requirements and improving efficiency.
              </p>
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition inline-flex items-center hover:scale-105 transform"
              >
                Get Started <ArrowRight />
              </Link>
            </div>
            <div className="animate-fade-in-left">
              <Image
                src="https://imgur.com/a/WmVeXo8.png"
                alt="ShelfWhiz Logo"
                width={500}
                height={500}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How ShelfWhiz Helps You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Pre-planned SKU placement means your warehouse setups, reconfigurations, and expansions happen smoothly
              and quickly
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Setups</h3>
              <p className="text-gray-600">
                Streamline your setups, maximize efficiency, minimize effort, while significantly reducing the disruption for you and your customers.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Reduce Manpower</h3>
              <p className="text-gray-600">
                Our system requires fewer personnel and achieve better results than traditional methods.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Box />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Product Placement</h3>
              <p className="text-gray-600">
                Total skid-to-shelf product intelligence: the ultimate operational breakthrough. As we like to call it Simplified Setups!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ShelfWhiz in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Transform your shelf dimensions, vendor box data, and inventory into a precise, actionable layout with ShelfWhiz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <Image
                src="/modern-warehouse-with-organized-shelving-systems.jpg"
                alt="ShelfWhiz solution"
                width={600}
                height={384}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-100">
              <Image
                src="/Screenshot.png"
                alt="ShelfWhiz solution"
                width={600}
                height={384}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200">
              <Image
                src="/Last Pic.jpg"
                alt="ShelfWhiz solution"
                width={600}
                height={384}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          {/* Added Layout Example with centered heading and left-aligned text */}
          <div className="mt-12 bg-blue-50 p-12 rounded-xl shadow-lg border border-blue-200" style={{ paddingBottom: '40px' }}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Layout Example</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Below is an example of a ShelfWhiz layout. Our system organizes every SKU on every shelf into a Simplified Setup.
            </p>
            <Image
              src="/documents/Layout Example.bmp"
              alt="Layout Example"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              onError={(e) => {
                const errorDiv = document.createElement("div");
                errorDiv.textContent = "Error loading image. Please ensure the file exists or contact support.";
                errorDiv.style.color = "red";
                e.target.replaceWith(errorDiv);
              }}
            />
            <p className="text-sm text-gray-500 mt-4">
              * Disclaimer - The accuracy of ShelfWhiz can only be guaranteed if the underlying data—including inventory quantities, vendor box information, and customer shelf details—is correct. Contact us at{" "}
              <a href="mailto:info.shelfwhiz@gmail.com" className="text-blue-600 hover:underline">
                info.shelfwhiz@gmail.com
              </a>{" "}
              for questions or other inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              To unlock faster warehouse setups- Contact us to find out how ShelfWhiz can streamline your next changeover or store setup.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up">
            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Information</h3>
              <p className="text-gray-600 mb-6 flex items-center justify-center">
                <Mail className="mr-2" /> info.shelfwhiz@gmail.com
              </p>
              <div className="mt-6">
                <Link
                  href="mailto:info.shelfwhiz@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition inline-flex items-center hover:scale-105 transform"
                >
                  Email Us <Send />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}