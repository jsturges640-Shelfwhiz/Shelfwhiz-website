"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Using yellow-500 for the star color to make them stand out
const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-5 h-5 text-yellow-500 ${className}`} // Stars are yellow-500
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);
// Sample Testimonial Data (Data array remains unchanged)
const testimonials = [
  {
    id: 3,
    name: "Cliff M",
    company: "Massachusetts",
    role: "Regional Sales Manger",
    content:
      "I have been in the sales industry for over 14 years, and during that time I’ve been involved in countless warehouse resets and inventory transitions. One of the most difficult and time-consuming parts has always been getting products organized on the shelves in the correct order. In the past, we would have to lay everything out on the floor first, then handle the parts multiple times before finally getting them on the shelves. Since using the ShelfWhiz program, this process has completely changed. We can now go directly from the pallet to the shelf. I simply provide a few dimensions and details about the customer’s existing and incoming inventory, and the program does the rest — calculating the number of shelves needed, exact spacing, and even providing detailed layouts and stickers for those positions. The Shelfwhiz system has saved us hours of labor and eliminated confusion, while keeping displays consistent and professional. I’m spoiled now, and cannot imagine doing these jobs the old way.",
    rating: 5,
    image: "/professional-woman-inventory-specialist.jpg",
  },
  {
    id: 2,
    name: "Jorge A",
    company: "Rancho Cucamonga, CA",
    role: "Regional Sales Manager",
    content:
      "Since August 2024, I’ve relied on the ShelfWhiz shelf layout program for warehouse product set-ups, and by October 2025, it’s become indispensable. Previously, my team offloaded products from pallets onto the warehouse floor in numerical sequence—a process that was unproductive, time-consuming, space-intensive, and physically taxing. When I first heard about ShelfWhiz, I was skeptical it would work. However, after placing stickers on shelves to guide product placement, I was amazed at how it streamlined the process. Products went straight from pallets to shelves, saving significant time. I’ve used it at multiple warehouses, including two setups in San Marcos, California, where employees remarked on my ability to set up multiple pallets in just a few hours, recalling my prior success with the system. ShelfWhiz has transformed my warehouse setup experience into a highly efficient and productive process.",
    rating: 5,
    image: "/professional-man-logistics-director.jpg",
  },
  {
    id: 1,
    name: "Jimmy G",
    company: "Dallas, TX",
    role: "Director, Stratigic Accounts",
    content:
      "ShelfWhiz Mapping program revolutionizes inventory execution. By streamlining the process and eliminating unnecessary product movement, it delivers unmatched efficiency and cost savings.",
    rating: 5,
    image: "/professional-man-warehouse-manager.jpg",
  },
  {
    id: 4,
    name: "Jere Holder",
    company: "Sparta,TN",
    role: "Operations Manager",
    content: "Amazing",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 5,
    name: "Mevo Mike",
    company: "Chattanooga, TN",
    role: "National Support Specialist Mgr",
    content: "I had the pleasure of working with John on a change over, this system saves so much time by calculating every parameter possible in a changeover. This becomes a very beneficiary when people have to come in from out of town to perform a changeover. The old phrase “time is money “ is very well demonstrated here.",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 6,
    name: "Todd S",
    company: "Buffalo, NY",
    role: "Divisional Sales Mgr",
    content: "Game Changer, I've done a ton of changeovers, none as easy as when I used ShelfWhiz",
    rating: 5,
    image: "/professional-placeholder.jpg",
  },
  {
    id: 7,
    name: "Jack H",
    company: "Anaheim, CA",
    role: "VP Sales",
    content: "Wish I had known about this in my younger days.",
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

// Testimonial Card (Standard)
const TestimonialCard = ({ content, name, company, role, rating, id }: (typeof testimonials)[0]) => (
  <Card key={id} className="shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
    <CardContent className="p-6 space-y-4">
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      <blockquote className="text-gray-600 italic">
        "{content}"
      </blockquote>

      <div className="pt-2 border-t border-gray-200">
        <p className="font-semibold text-gray-900">{name}</p>
        {/* Role is blue */}
        <p className="text-sm text-blue-600">{role}</p> 
        <p className="text-xs text-gray-400">{company}</p>
      </div>

    </CardContent>

  </Card>
);

// Featured Testimonial Card (id 2)
const TestimonialCardFeatured = ({ content, name, company, role, rating }: (typeof testimonials)[0]) => (
  <Card className="col-span-1 md:col-span-3 bg-white shadow-lg border-t-4 border-blue-500 rounded-xl">
    <CardContent className="p-6 space-y-4 flex flex-col md:flex-row items-start md:items-center">
      
      {/* Stars Section */}
      <div className="flex-shrink-0 flex mb-4 md:mb-0 md:mr-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      {/* Blockquote Content */}
      <div className="flex-grow">
        <blockquote className="text-gray-600 italic">
          "{content}"
        </blockquote>
      </div>

      {/* Name/Role/Company Section */}
      <div className="pt-2 md:pt-0 md:pl-6 md:border-l md:border-gray-200">
        <p className="font-semibold text-gray-900">{name}</p>
        {/* Role is blue */}
        <p className="text-sm text-blue-600">{role}</p> 
        <p className="text-xs text-gray-400">{company}</p>
      </div>

    </CardContent>

  </Card>
);

export default function TestimonialsPage() {

  // 1. Define the custom order of IDs for the grid 
  const customOrderIds = [1, 5, 8, 3, 4, 6, 7];

  // 2. Filter and map testimonials based on the custom order
  const orderedTestimonials = customOrderIds
    .map(id => testimonials.find(t => t.id === id))
    .filter((t): t is (typeof testimonials)[0] => t !== undefined);

  // 3. Find the featured testimonial (id 2)
  const featuredTestimonial = testimonials.find(t => t.id === 2);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero/Header Section */}
      <div className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            PROVEN RESULTS
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl">
            Client Success Stories
            and Warehouse Transformation
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
            Read how **ShelfWhiz™** has helped leading businesses, and reps achieve unprecedented efficiency, cut changeover times, and maximize labor utilization.
          </p>

        </div>

      </div>
      {/* Testimonials Section (Layout logic remains the same) */}
      <section className="py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Testimonial (id: 2) */}
          <div className="mb-12">
            {featuredTestimonial && (
              <TestimonialCardFeatured {...featuredTestimonial} />
            )}
          </div>


          {/* Grid for Other Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {orderedTestimonials
              .map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={testimonial.id === 3 ? "col-span-1 md:col-span-3" : "col-span-1"}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
          </div>


        </div>

      </section>
      {/* CTA Section - Blue Background */}
      <section className="bg-blue-600">

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to Join Our Success Stories?</span>
            <span className="block text-blue-200">Transform your warehouse setups with ShelfWhiz™ and become our next success story.</span>
          </h2>

          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              {/* === FIX: Changed Link to an anchor tag <a> using the mailto: protocol from your Pricing page === */}
              <a 
                href="mailto:info.shelfwhiz@gmail.com?subject=Get%20Started%20Request%20from%20Testimonials"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started Today
              </a>
              {/* =================================================================================================== */}
            </div>
          </div>

        </div>

      </section>

      <footer className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Back to Home
          </Link>
        </div>
      </footer>

    </div>

  );
}