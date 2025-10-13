"use client";

import React from "react";
import Link from "next/link";

export default function DocumentsPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          ShelfWhiz Resources
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Download our shelf layout chart to see exactly what information ShelfWhiz™ needs
          to run your next setup, changeovers, and expansions.
        </p>

        <div className="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Download Our Guide</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get our detailed Shelf Layout Chart on streamlining warehouse changeovers
            with ShelfWhiz's smart SKU placement and layout solutions.
          </p>
          <a
            href="/documents/shelfwhiz-guide.pdf"
            download="shelfwhiz-guide.pdf"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-md"
          >
            Download PDF Guide
          </a>
          <p className="text-sm text-gray-500 mt-4">
            If the download doesn’t start or opens as a PowerPoint, ensure
            your browser is set to download PDFs (Chrome: Settings >
            Privacy and Security > PDF Documents > Enable "Download PDFs";
            Edge: Settings > Cookies and Site Permissions > PDF Documents >
            Enable "Always download PDF files"). Try a hard refresh
            (Ctrl+Shift+R or Cmd+Shift+R) or{" "}
            <a href="/documents/shelfwhiz-guide.pdf" className="text-blue-600 hover:underline">
              open the PDF directly
            </a>
            . Contact us at{" "}
            <a href="mailto:info.shelfwhiz@gmail.com" className="text-blue-600 hover:underline">
              info.shelfwhiz@gmail.com
            </a>{" "}
            if issues persist.
          </p>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block text-blue-600 hover:text-blue-700 font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}