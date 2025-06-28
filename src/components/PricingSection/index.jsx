"use client";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-4 w-full mx-auto bg-gradient-to-br from-[#18191A] via-[#23272F] to-[#18191A]  shadow-2xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Pricing
      </h2>
      <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Simple, transparent pricing. Pay once for your MVP, add extras as you
        need.
      </p>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-y-10 lg:gap-x-6 max-w-4xl mx-auto">
        {/* MVP Pricing Card */}
        <div className="w-full max-w-md bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400" />
          <h3 className="text-2xl font-bold text-white mb-2">
            One-Time MVP Launch
          </h3>
          <div className="text-5xl font-extrabold text-white mb-2">$3499</div>
          <p className="text-gray-200 mb-6">
            Everything you need to launch your MVP fast, with no recurring fees.
          </p>
          <ul className="text-left mb-8 space-y-2">
            {[
              "Full-featured MVP Development",
              "No Landing Page included",
              "Responsive & mobile-ready",
              "Basic SEO setup",
              "Payment Gateway Integration",
              "4-5 Weeks Delivery Time",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-white text-sm"
              >
                <span className="text-green-400">✔</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://cal.com/stack-clix/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Add-Ons Section */}
        <div className="w-full max-w-md flex flex-col gap-6">
          <h4 className="text-xl font-bold text-white">Add-Ons</h4>
          {[
            {
              title: "Landing Page",
              price: "+$799",
              description: "Add a custom Landing page for your MVP.",
            },
            {
              title: "Extra Feature Module",
              price: "+$399",
              description: "Add a custom feature or integration to your MVP.",
            },
            {
              title: "Ongoing Support",
              price: "+$499/mo",
              description:
                "Priority bug fixes and feature tweaks after launch.",
            },
          ].map((addon, index) => (
            <div
              key={index}
              className="bg-[#23272F] rounded-2xl shadow-lg p-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-semibold text-white">
                  {addon.title}
                </span>
                <span className="text-base font-bold text-blue-400">
                  {addon.price}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
