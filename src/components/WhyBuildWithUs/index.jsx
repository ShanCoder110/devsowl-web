"use client";

import {
  FiClock,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiLayers,
  FiSmile,
} from "react-icons/fi";

const features = [
  {
    icon: FiClock,
    title: "Faster Time to Market",
    description:
      "Launch your MVP in weeks, not months. Speed is our superpower.",
  },
  {
    icon: FiZap,
    title: "AI-Augmented Team",
    description:
      "Our team blends engineering expertise with AI tools to move smarter.",
  },
  {
    icon: FiShield,
    title: "Enterprise-Grade Security",
    description:
      "From day one, we build with scalability and security in mind.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Architecture",
    description:
      "No hacks or shortcuts — just solid foundations that scale with you.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Ownership",
    description:
      "One team. All layers. From backend to frontend, we handle it all.",
  },
  {
    icon: FiSmile,
    title: "Founder-Friendly",
    description:
      "We speak startup. Clear communication, lean roadmaps, and quick pivots.",
  },
];

const WhyBuildWithUs = () => {
  return (
    <section className="py-24 px-4 w-full mx-auto bg-surface-bg text-font-foreground">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary inline-block text-transparent bg-clip-text">
          Why Build With Us?
        </h2>
        <p className="text-lg md:text-xl text-font-muted max-w-2xl mx-auto">
          Not just another dev shop. We’re your product acceleration
          partner—turning ideas into launch-ready MVPs that impress investors
          and users.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="bg-surface-panel/70 border border-surface-panel backdrop-blur-md p-6 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-primary/30 hover:border-brand-primary/30 group"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary/10 text-brand-primary mb-4 group-hover:bg-brand-primary/20">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-font-muted text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBuildWithUs;
