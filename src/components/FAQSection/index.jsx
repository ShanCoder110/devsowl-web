"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How long does it take to launch my MVP?",
    answer:
      "Most MVPs are delivered in 4–5 weeks depending on scope. We follow a fast and agile process.",
  },
  {
    question: "Is there any ongoing cost after launch?",
    answer:
      "No recurring cost unless you opt for support or hosting add-ons. The MVP price is one-time.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Yes! We support additional feature modules and integrations at a fixed add-on cost.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We use React, Node.js, PostgreSQL, and other modern tools tailored to your project’s needs.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds once development starts, but we ensure transparency and progress updates.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full flex flex-col items-center py-20 px-4 bg-surface-bg"
      id="faq"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-font-foreground text-center mb-2">
        Frequently Asked <span className="text-brand-primary">Questions</span>
      </h2>
      <p className="text-lg md:text-xl text-font-muted text-center mb-12 max-w-2xl mx-auto">
        Answers to the most common questions about our process, pricing, and
        what you get.
      </p>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-surface-secondary/70 border border-surface-panel rounded-2xl shadow-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary group"
            >
              <span className="text-lg font-semibold text-font-foreground">
                {faq.question}
              </span>
              <FiChevronDown
                className={`w-6 h-6 text-brand-primary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-6 text-font-muted text-sm transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 pb-5"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
