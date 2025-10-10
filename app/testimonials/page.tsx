"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card" 

// Simple SVG icon components
const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

// Sample Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Jere Holder",
    company: "MegaWarehouse Solutions",
    role: "Operations Manager",
    content:
      "ShelfWhiz transformed our inventory setup process. What used to take us 3 days now takes just over a day. The efficiency gains are remarkable.",
    rating: 5,
    image: "/professional-man-warehouse-manager.jpg",
  },
  {
    id: 2,
    name: "Bryan Miller",
    company: "FastTrack Automotive Warehouse",
    role: "VP Logistics",
    content:
      "The smart product placement feature alone saved us 40% on setup time. Our team loves how intuitive the system is.",
    rating: 5,
    image: "/professional-man-logistics-director.jpg",
  },
  {
    id: 3,
    name: "Cliff M",
    company: "Global Supply Co.",
    role: "Sales Specialist",
    content:
      "ShelfWhiz made our changeovers seamless. The pre-planned SKU placement & shelf layout is a game-changer, I'll never do another changeover without it.",
    rating: 5,
    image: "/professional-woman-inventory-specialist.jpg",
  },
]

const TestimonialCard = ({ content, name, company, role, rating }: (typeof testimonials)[0]) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
    <div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-gray-700 italic mb-6 text-lg leading-relaxed">
        "{content}"
      </blockquote>
    </div>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-blue-600">{role}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
)

export default function TestimonialsPage() {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo Link */}
            <Link href="/">
              <span className="text-xl font-bold text-blue-600">
                Shelf<span className="text-gray-800">Whiz™</span>
              </span>
            </Link>

            {/* Navigation Links + Button */}
            <div className="hidden md:flex space-x-6 h-full items-center">
              <Link href="/#features" className="text-gray-700 hover:text-blue-600 transition h-full flex items-center">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition h-full flex items-center">
                Pricing
              </Link>
              <Link href="/testimonials" className="text-blue-600 font-semibold transition h-full flex items-center">
                Testimonials
              </Link>
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition transform hover:scale-105 shadow-md flex items-center justify-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero/Header Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50 overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
              PROVEN RESULTS
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight mx-auto text-center max-w-2xl">
              <span className="block">Client Success Stories</span>
              <span className="block">and Warehouse Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
              Read how ShelfWhiz has helped leading businesses achieve unprecedented efficiency, cut changeover times, and maximize labor utilization.
            </p>
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Transform your warehouse setups with ShelfWhiz and become our next success story.
              </p>
              <Link
                href="/#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition inline-flex items-center hover:scale-105 transform shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pb-8">
          <Link
            href="/"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium transition"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl font-bold text-blue-400">
                    Shelf<span className="text-white">Whiz™</span>
                  </span>
                </div>
                <p className="text-gray-400">Streamlining changeovers since 2021</p>
              </div>
              <div className="text-center md:text-right text-gray-400 text-sm">
                &copy; 2025 ShelfWhiz™. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}