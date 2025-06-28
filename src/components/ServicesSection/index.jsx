"use client";

import {
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiShield,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const services = [
  {
    title: "Custom Software Development",
    icon: FiCpu,
    description:
      "End-to-end tailored software solutions built to match your business needs.",
  },
  {
    title: "Mobile App Development",
    icon: FiSmartphone,
    description:
      "Native and cross-platform mobile apps with stunning UI and blazing performance.",
  },
  {
    title: "Cloud Architecture & DevOps",
    icon: FiCloud,
    description:
      "We help you scale with cloud-native architectures, CI/CD, and DevOps automation.",
  },
  {
    title: "Cybersecurity Solutions",
    icon: FiShield,
    description:
      "Protect your business with secure app design, vulnerability testing, and compliance.",
  },
  {
    title: "Business Intelligence",
    icon: FiTrendingUp,
    description:
      "Use data-driven insights and dashboards to boost operational efficiency and growth.",
  },
  {
    title: "AI Integration",
    icon: FiZap,
    description:
      "Automate workflows and supercharge your product with cutting-edge AI models.",
  },
];

const ServiceCard = ({ title, icon: Icon, description }) => (
  <div className="bg-surface-panel/60 backdrop-blur-md border border-surface-panel rounded-3xl p-6 text-font-foreground shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-brand-primary/20 hover:border-brand-primary/30 w-full max-w-xs group cursor-pointer">
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary mb-4 group-hover:bg-brand-primary/20">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-font-muted text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 w-full mx-auto bg-gradient-to-br from-surface-bg via-surface-secondary to-surface-bg shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-font-foreground text-center mb-2">
        Our Services
      </h2>
      <p className="text-lg md:text-xl text-font-muted text-center mb-12 max-w-2xl mx-auto">
        Explore our full suite of digital and software development services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
