"use client";

import { LogOut, ShoppingCart, Trash, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import LoginButton from "./LoginButton";
import { signOut, useSession } from "next-auth/react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Groceries",
  "Health & Beauty",
  "Sports",
];

const NavBar: React.FC = () => {
  const { cart, totalItems, totalPrice, removeFromCart, clearCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-md border-b">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center text-xs bg-gray-100 px-6 py-2">
        <div className="flex gap-4">
          <Link href="/help" className="hover:text-amber-500">Help Center</Link>
          <Link href="/track" className="hover:text-amber-500">Track Order</Link>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-amber-500 cursor-pointer">English</span>
          <span className="hover:text-amber-500 cursor-pointer">৳ BDT</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-amber-500 font-bold text-xl tracking-wide hover:text-amber-600">
            Trendnoa
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="flex w-full max-w-2xl border rounded-lg overflow-hidden">
              <select className="text-sm bg-gray-100 px-2 border-r outline-none">
                <option>All</option>
                {categories.map((cat, i) => (
                  <option key={i}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search in Trendnoa..."
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="bg-amber-500 px-4 flex items-center justify-center hover:bg-amber-600 text-white">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setCartOpen((v) => !v)}
                className="relative p-2 cursor-pointer rounded-md hover:bg-gray-100"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full px-1">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-lg border p-3 z-50">
                  {cart.length === 0 ? (
                    <p className="text-sm text-gray-600">Your cart is empty.</p>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-2">
                          <div className="flex items-center gap-2">
                            <img src={item.imageUrl} alt={item.name} className="w-10 h-10 object-cover rounded" />
                            <div>
                              <p className="text-sm font-semibold">{item.name}</p>
                              <p className="text-xs text-gray-500">
                                {item.quantity} × {item.discountPrice || item.price}৳
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 cursor-pointer hover:text-red-700"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      ))}

                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>{totalPrice}৳</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={clearCart}
                          className="w-1/2 bg-gray-200 cursor-pointer hover:bg-gray-300 px-3 py-1 rounded text-sm"
                        >
                          Clear
                        </button>
                        <button className="w-1/2 bg-amber-500 hover:bg-amber-600 text-white cursor-pointer px-3 py-1 rounded text-sm">
                          Checkout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Auth */}
            <div className="hidden sm:block">
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <LoginButton />
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Category Bar (Desktop Only) */}
      <div className="hidden md:flex bg-gray-50 border-t border-gray-200 px-6 py-2 space-x-6 text-sm font-medium">
        {categories.map((cat, i) => (
          <Link key={i} href={`/category/${cat.toLowerCase()}`} className="hover:text-amber-500">
            {cat}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="flex flex-col space-y-2 p-4 text-sm font-medium">
            {categories.map((cat, i) => (
              <Link key={i} href={`/category/${cat.toLowerCase()}`} className="hover:text-amber-500">
                {cat}
              </Link>
            ))}
            <Link href="/shop" className="hover:text-amber-500">Shop</Link>
            <Link href="/about" className="hover:text-amber-500">About</Link>
            <Link href="/contact" className="hover:text-amber-500">Contact</Link>
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="mt-2 flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
              >
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
