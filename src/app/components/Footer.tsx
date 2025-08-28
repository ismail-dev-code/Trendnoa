import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
     <footer className="py-6 text-center text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
        <p>
          © {new Date().getFullYear()} Trendnoa. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3 text-sm">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </footer>
  )
}
