"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Simple SVG icon components
const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Quote = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
)

export default function TestimonialsPage() {
  // Placeholder testimonials - you can replace these with real ones later
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "MegaWarehouse Solutions",
      role: "Operations Manager",
      content:
        "ShelfWhiz transformed our inventory setup process. What used to take us 3 days now takes just over a day. The efficiency gains are remarkable.",
      rating: 5,
      image: "/professional-woman-warehouse-manager.jpg",
    },
    {
      id: 2,
      name: "Mike Chen",
      company: "FastTrack Logistics",
      role: "Warehouse Director",
      content:
        "The smart product placement feature alone saved us 40% on setup time. Our team loves how intuitive the system is.",
      rating: 5,
      image: "/professional-man-logistics-director.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Global Supply Co.",
      role: "Inventory Specialist",
      content:
        "ShelfWhiz made our seasonal changeovers seamless. The pre-planned SKU placement is a game-changer for our operations.",
      rating: 5,
      image: "/professional-woman-inventory-specialist.jpg",
    },
  ]

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Shelf<span className="text-gray-800">Whiz</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-100 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-balance">What Our Customers Say</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Discover how ShelfWhiz has transformed warehouse operations for businesses across the industry
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="text-blue-600 w-8 h-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-600 mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>

                  {/* Customer Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State for Adding More Testimonials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-xl p-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Success Story</h3>
            <p className="text-gray-600 mb-6 text-pretty">
              Have you experienced the benefits of ShelfWhiz? We'd love to hear about your results and share your story
              with others.
            </p>
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition inline-flex items-center hover:scale-105 transform"
            >
              Submit Your Testimonial
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-6 text-balance">Ready to Join Our Success Stories?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Transform your warehouse operations with ShelfWhiz and become our next success story
            </p>
            <Link
              href="/#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition inline-flex items-center hover:scale-105 transform"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl font-bold text-blue-400">
                  Shelf<span className="text-white">Whiz</span>
                </span>
              </div>
              <p className="text-gray-400">Streamlining changeovers since 2021</p>
            </div>
            <div className="text-center text-gray-400 text-sm">&copy; 2025 ShelfWhiz. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
