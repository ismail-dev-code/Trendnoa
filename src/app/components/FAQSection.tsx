"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  { question: "What is TrendNoa?", answer: "TrendNoa is a modern e-commerce platform offering the latest products and exclusive deals." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with reliable delivery partners." },
  { question: "What payment methods do you accept?", answer: "We accept major credit/debit cards, mobile payments, and digital wallets." },
  { question: "Can I return a product?", answer: "Yes, you can return products within 7 days of delivery if eligible." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you will receive a tracking link via email/SMS." },
  { question: "Do you offer cash on delivery?", answer: "Yes, cash on delivery is available in select regions." },
  { question: "How do I contact customer support?", answer: "You can reach us via live chat, email, or our 24/7 helpline." },
  { question: "Are there any membership benefits?", answer: "Yes, TrendNoa members enjoy discounts, early access to sales, and reward points." },
  { question: "Is my payment secure?", answer: "Absolutely. We use industry-standard encryption and trusted payment gateways." },
  { question: "Do you offer discounts for students?", answer: "Yes, students can avail special discounts with valid student ID." },
  { question: "Can I cancel an order after placing it?", answer: "Yes, cancellations are possible before the order is shipped." },
  { question: "How long does delivery take?", answer: "Delivery typically takes 3-7 business days depending on your location." },
  { question: "Do you offer bulk order discounts?", answer: "Yes, we provide special rates and offers for bulk purchases." },
  { question: "Can I change my shipping address after ordering?", answer: "Yes, you can update your address before the order is shipped." },
  { question: "Do you provide warranty on products?", answer: "Yes, many products come with a manufacturer’s warranty." },
  { question: "How do I become a seller on TrendNoa?", answer: "You can apply through our seller portal to start listing your products." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {visibleFaqs.map((faq, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="border rounded-lg shadow-sm p-4 bg-white dark:bg-slate-900"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold cursor-pointer"
            >
              {faq.question}
              <span className="ml-2">{openIndex === idx ? "−" : "+"}</span>
            </button>

            {openIndex === idx && (
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {faqs.length > 5 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
