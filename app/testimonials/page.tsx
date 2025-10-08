"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Simple SVG icon components
const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

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
    name: "Jorge A",
    company: "Rancho Cucamonga, CA",
    role: "Regional Sales Manager",
    content:
      "Since August 2024, I’ve relied on the Shelfwhiz shelf layout program for warehouse product set-ups, and by October 2025, it’s become indispensable. Previously, my team offloaded products from pallets onto the warehouse floor in numerical sequence—a process that was unproductive, time-consuming, space-intensive, and physically taxing. When I first heard about Shelfwhiz, I was skeptical it would work. However, after placing stickers on shelves to guide product placement, I was amazed at how it streamlined the process. Products went straight from pallets to shelves, saving significant time. I’ve used it at multiple warehouses, including two setups in San Marcos, California, where employees remarked on my ability to set up multiple pallets in just a few hours, recalling my prior success with the system. Shelfwhiz™ has transformed my warehouse setup experience into a highly efficient and productive process.",
    rating: 5,
    image: "/professional-man-logistics-director.jpg",
  },
  {
    id: 3,
    name: "Cliff M",
    company: "Massachusetts.",
    role: "Sales Specialist",
    content:
      "ShelfWhiz made our changeovers seamless. The pre-planned SKU placement & shelf layout is a game-changer, I'll never do another changeover without it.",
    rating: 5,
    image: "/professional-woman-inventory-specialist.jpg",
  },
  {
    id: 4,
    name: "Jim G",
    company: "Dallas, TX",
    role: "Director, Stratigic Accounts",
    content: "Simply Amazing",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 5,
    name: "Eddie F",
    company: "Fresno, CA",
    role: "Regional Sales Manager",
    content: "Brilliant",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 6,
    name: "Todd S",
    company: "Buffalo, NY",
    role: "Divisional Sales Mgr",
    content: "Game Changer, I've done a ton of changeovers, none as easy as when I used Shelfwhiz",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 7,
    name: "Jack H",
    company: "Anaheim, CA",
    role: "VP Sales",
    content: "Wish I had know about this in my younger days.",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 8,
    name: "Scott A",
    company: "Portland,OR",
    role: "Director of Sales",
    content: "Makes easy work out of Complex Changeovers",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
];

const TestimonialCard = ({ content, name, company, role, rating, id }: (typeof testimonials)[0]) => (
  <div
    className={`bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between py-4 px-6 min-h-[200px] hover:shadow-xl transition-all duration-300`}
  >
    <div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      <blockquote
        className="text-gray-700 italic mb-6 text-base leading-relaxed"
      >
        "{content}"
      </blockquote>
    </div>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-blue-600">{role}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

const TestimonialCardFeatured = ({ content, name, company, role, rating }: (typeof testimonials)[0]) => (
  <div
    className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between p-6 w-full md:w-3/4 lg:w-2/3 mx-auto hover:shadow-xl transition-all duration-300"
  >
    <div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      <blockquote
        className="text-gray-700 italic mb-6 text-lg leading-relaxed max-h-[300px] overflow-y-auto"
      >
        "{content}"
      </blockquote>
    </div>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-blue-600">{role}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

export default function TestimonialsPage() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
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
            Read how ShelfWhiz™ has helped leading businesses, and reps achieve unprecedented efficiency, cut changeover times, and maximize labor utilization.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Featured Testimonial (id: 2) */}
          <div className="mb-12">
            {testimonials
              .filter((testimonial) => testimonial.id === 2)
              .map((testimonial) => (
                <TestimonialCardFeatured key={testimonial.id} {...testimonial} />
              ))}
          </div>
          {/* Grid for Other Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials
              .filter((testimonial) => testimonial.id !== 2)
              .map((testimonial, index) => (
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
              Transform your warehouse setups with ShelfWhiz™ and become our next success story.
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
    </main>
  );
}