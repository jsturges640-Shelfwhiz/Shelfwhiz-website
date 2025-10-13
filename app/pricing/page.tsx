import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - ShelfWhiz™",
  description: "View ShelfWhiz pricing models and contact us for a custom quote.",
};

export default function PricingPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Our Pricing is Built Around You, and Extremely Affordable
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer, custom-tailored solutions for initial warehouse, store setups, changeovers, line expansions, and reboxes.
        </p>

        <div className="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Get a Custom Quote
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            ShelfWhiz™ will layout the entire line by SKU, and shelf, send a detailed file along with our Whizset™ label deck. We can also print & ship the labels if required at an additional cost.
          </p>
          <a
            href="mailto:info.shelfwhiz@gmail.com?subject=Price%20Quote%20Request"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-md"
          >
            E-mail for a Quote
          </a>
        </div>

        <p className="text-md text-gray-500 mt-12">
          Shelfwhiz™ Dana Point, CA 92629
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-blue-600 hover:text-blue-700 font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}