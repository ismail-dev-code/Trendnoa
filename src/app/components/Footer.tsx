"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Trendnoa
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm">
              Stay updated with the latest trends around the world — fashion,
              tech, culture, and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-8 text-sm">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-200">
                Quick Links
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-200">
                Contact
              </h3>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> support@trendnoa.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +880 1234 567890
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-gray-500 dark:text-gray-400">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:text-sky-500 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Trendnoa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
