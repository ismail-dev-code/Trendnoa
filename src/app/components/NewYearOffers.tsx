"use client";

import React from "react";
import { useCart } from "../context/CartContext"; // ✅ cart integration
import { ShoppingCart, BadgePercent } from "lucide-react";

type Offer = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  discountPrice?: number;
};

const offers: Offer[] = [
  {
    id: 1,
    title: "Winter Fashion Bundle",
    description: "Trendy winter wear to keep you warm & stylish in 2026.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVutHYiHqjSdvr0TrwI0x8G9DPNV1kp52cJQ&s",
    price: 12000,
    discountPrice: 9000,
  },
  {
    id: 2,
    title: "Smart Gadget Pack",
    description: "Latest gadgets at an unbeatable New Year offer price.",
    image:
      "https://assets.aboutamazon.com/dims4/default/e41d188/2147483647/strip/true/crop/1599x900+1+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F87%2Ffb%2F7c6b10b84236a62e7f9e5dbd92ed%2Ftech-gadgets.jpg",
    price: 29900,
    discountPrice: 21000,
  },
  {
    id: 3,
    title: "Home Essentials Combo",
    description: "Upgrade your home with our curated essentials package.",
    image:
      "https://www.vooki.in/cdn/shop/files/Combo_LS_DW_FC_Hard_Stain_TBC.jpg?v=1744957146",
    price: 18000,
    discountPrice: 8900,
  },
  {
    id: 4,
    title: "Fitness Starter Kit",
    description: "Start 2026 with fitness gear designed for success.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIQsKNIuEOuXmzYmSR1-Uj8qhEclanYxV-w&s",
    price: 15000,
    discountPrice: 9900,
  },
];

export default function NewYearOffers() {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          🎉 Special New Year Offers 2026 🎉
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Kickstart your year with Trendnoa’s exclusive deals
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover rounded-xl"
              />
              {offer.discountPrice && (
                <span className="absolute top-2 left-2 flex items-center gap-1 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                  <BadgePercent size={14} />{" "}
                  {Math.round(
                    ((offer.price - offer.discountPrice) / offer.price) * 100
                  )}
                  % OFF
                </span>
              )}
            </div>

            {/* Content */}
            <div className="mt-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex-1">
                {offer.description}
              </p>

              {/* Price */}
              <div className="mt-3 flex items-center gap-2">
                {offer.discountPrice ? (
                  <>
                    <span className="text-gray-400 line-through text-sm">
                      {offer.price}৳
                    </span>
                    <span className="text-lg font-bold text-indigo-600">
                      {offer.discountPrice}৳
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-indigo-600">
                    {offer.price}৳
                  </span>
                )}
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() =>
                addToCart({
                  id: offer.id,
                  name: offer.title,
                  price: offer.price,
                  discountPrice: offer.discountPrice,
                  imageUrl: offer.image,
                  quantity: 1,
                })
              }
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer flex items-center justify-center gap-2 text-sm font-medium py-2 px-4 rounded-xl transition"
            >
              <ShoppingCart size={16} /> Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
