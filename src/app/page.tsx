
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-20 text-center sm:text-left gap-10">
        {/* Logo / Branding */}
       <NavBar/>

      </main>

      {/* Features Section */}
      <section className="py-16 px-6 sm:px-20 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Why Choose Trendnoa?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Follow the latest global trends and insights curated for you.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Engage with a vibrant community and share your knowledge.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Innovative Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access modern features to explore, learn, and grow faster.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
