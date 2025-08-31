"use client";

import React from "react";
import { ShoppingBag, Watch, Laptop, Shirt } from "lucide-react";

type Category = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    id: 1,
    title: "Fashion Trends",
    description: "Discover the hottest clothing and styles for 2026.",
    icon: <Shirt className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 2,
    title: "Smart Gadgets",
    description: "Explore the latest tech gadgets and electronics.",
    icon: <Laptop className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 3,
    title: "Luxury Watches",
    description: "Timeless collections for the modern lifestyle.",
    icon: <Watch className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 4,
    title: "Accessories",
    description: "Complete your look with premium accessories.",
    icon: <ShoppingBag className="w-10 h-10 text-green-500" />,
  },
];

export default function TopCategories() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Top Categories of 2026
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated list of categories designed to keep you ahead of
            the trends this year.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
