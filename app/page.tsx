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
              {/* ✅ Updated image to use local file */}
              <Image
                src="/logo.jpg"
                alt="ShelfWhiz Logo"
                width={500}
                height={500}
                priority
                unoptimized
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ... the rest of your page remains unchanged ... */}
    </main>
  );
}
