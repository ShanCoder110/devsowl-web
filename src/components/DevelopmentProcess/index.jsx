import React from "react";

export default function DevelopmentProcess() {
  const steps = [
    {
      title: "Initial Consultation",
      text: "Book a call to explore your vision. We'll uncover your goals and business needs in detail.",
    },
    {
      title: "MVP Planning & PRD",
      text: "Get a detailed MVP plan and a clear roadmap, including technical recommendations for a smooth start.",
    },
    {
      title: "Development Sprint",
      text: "Once you approve the plan, we start building. Your MVP will be ready in just 5 weeks with regular updates.",
    },
    {
      title: "MVP Delivery",
      text: "Launch your fully functional MVP with all planned features, ready for users and feedback.",
    },
    {
      title: "Maintenance & Support",
      text: "Enjoy a week of support, including bug fixes and optimization, to ensure a smooth launch.",
    },
  ];

  return (
    <div className="relative z-10 mb-24 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#121426] border border-cyan-500/10 p-8 md:p-12 shadow-xl shadow-cyan-500/10 backdrop-blur-md">
        <div className="flex items-center justify-between relative mb-16">
          {/* Timeline */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-0" />

          {steps.map((_, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              {/* Circle */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-blue-600 flex items-center justify-center text-white font-bold text-lg border-4 border-[#121426]">
                {idx + 1}
              </div>
              {/* Arrow */}
              {idx !== steps.length - 1 && (
                <div className="absolute top-1/2 right-[-36px] z-20 hidden md:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#1F2236] rounded-2xl border border-cyan-500/10 px-4 py-6 shadow-md shadow-cyan-800/10 hover:shadow-cyan-800/20 transition-all duration-300"
            >
              <h3 className="text-white text-lg font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg shadow-cyan-900/20 inline-flex items-center space-x-2 transition-all">
            <span>Start Your Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
