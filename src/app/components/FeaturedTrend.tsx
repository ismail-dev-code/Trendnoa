"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingCart, Tag } from "lucide-react";
import { useCart } from "../context/CartContext";

interface TrendItem {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  description?: string;
  imageUrl: string;
}

interface FeaturedTrendProps {
  title?: string;
  description?: string;
  trends?: TrendItem[];
}

const FeaturedTrend: React.FC<FeaturedTrendProps> = ({
  title = "Trending Clothing Products",
  description = "Discover the latest trending clothes and fashion items.",
  trends = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      category: "Jacket",
      price: 3500,
      discountPrice: 2800,
      description: "Timeless denim jacket perfect for casual wear.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzyirbFR1vrR8zZt85k6Z17qpy24P3wfz4Q&s",
    },
    {
      id: 2,
      name: "Vintage T-Shirt",
      category: "T-Shirt",
      price: 1200,
      discountPrice: 999,
      description: "Soft cotton vintage t-shirt with retro print.",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/210501105666415.5f7e03515db97.jpg",
    },
    {
      id: 3,
      name: "Leather Boots",
      category: "Footwear",
      price: 5400,
      discountPrice: 4600,
      description: "Premium leather boots for all seasons.",
      imageUrl:
        "https://www.unclehector.com/cdn/shop/products/browncasualboots.jpg?v=1682686540&width=1946",
    },
    {
      id: 4,
      name: "Summer Dress",
      category: "Dress",
      price: 2800,
      discountPrice: 2200,
      description: "Lightweight floral summer dress.",
      imageUrl:
        "https://amrshop.com.bd/public/uploads/all/WNXWkiH3QS8R9Cs6R1fjFw6fZEnyb62Q2xcL9vU4.jpg",
    },
  ],
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { addToCart } = useCart();

  return (
    <section className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 my-6">
      <header className="mb-6 text-center sm:text-left">
        <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100 mb-1">
          {title}
        </h2>
        <p className="text-gray-600 text-center dark:text-gray-300">{description}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col hover:shadow-lg transition-shadow h-full"
            data-aos="fade-up"
          >
            <img
              src={trend.imageUrl}
              alt={trend.name}
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
              {trend.name}
            </h3>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
              {trend.category}
            </span>
            {trend.description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 flex-grow">
                {trend.description}
              </p>
            )}

            {/* Price + Add to Cart */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <Tag className="text-gray-800 dark:text-gray-100" />
                {trend.discountPrice ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 line-through dark:text-gray-500">
                      {trend.price}৳
                    </span>
                    <span className="text-gray-800 dark:text-gray-100">
                      {trend.discountPrice}৳
                    </span>
                  </div>
                ) : (
                  <span className="text-gray-800 dark:text-gray-100">
                    {trend.price}৳
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() =>
                  addToCart({
                    id: trend.id,
                    name: trend.name,
                    price: trend.price,
                    discountPrice: trend.discountPrice,
                    imageUrl: trend.imageUrl,
                    quantity: 1,
                  })
                }
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-xs px-3 py-1 rounded-md transition"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrend;
