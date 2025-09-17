"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Trendnoa
            </h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Stay updated with the latest trends around the world — fashion,
              tech, culture, and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail size={16} /> support@trendnoa.com
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone size={16} /> +880 1234 567890
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-blue-500 hover:text-white transition"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-sky-500 hover:text-white transition"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-pink-500 hover:text-white transition"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="font-medium">Trendnoa</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
