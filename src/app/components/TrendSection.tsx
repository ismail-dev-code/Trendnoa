// TrendSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { CircleFadingArrowUpIcon } from "lucide-react";


interface TrendItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const trends: TrendItem[] = [
  {
    id: 1,
    title: "AI in Fashion",
    description: "Discover how AI is revolutionizing style and trends.",
    image: "/images/trend1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Eco-Friendly Products",
    description: "Trending sustainable products making a difference.",
    image: "/images/trend2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Smart Gadgets",
    description: "Check out the hottest smart gadgets in the market.",
    image: "/images/trend3.jpg",
    link: "#",
  },
];

const TrendSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Trending Now
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={trend.image}
                  alt={trend.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                <p className="text-gray-600 mb-4">{trend.description}</p>
                <a
                  href={trend.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More <CircleFadingArrowUpIcon className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendSection;
