"use client";
import { IMAGES } from "../../constants/images";

const services = [
  {
    title: "Custom SaaS Platforms",
    image: IMAGES.demo1,
    tags: ["SaaS", "Full Stack", "Cloud"],
    description:
      "We build scalable SaaS platforms tailored to your business goals using cutting-edge tech.",
  },
  {
    title: "AI Integration",
    image: IMAGES.demo1,
    tags: ["AI", "Automation", "Machine Learning"],
    description:
      "Automate and optimize your workflows with AI-powered solutions integrated seamlessly.",
  },
  {
    title: "Mobile App Development",
    image: IMAGES.demo1,
    tags: ["iOS", "Android", "React Native"],
    description:
      "Cross-platform mobile apps with exceptional UX and native performance.",
  },
  {
    title: "DevOps & Infrastructure",
    image: IMAGES.demo1,
    tags: ["AWS", "CI/CD", "Monitoring"],
    description:
      "Reliable, scalable infrastructure and automation for seamless deployments and uptime.",
  },
  {
    title: "More Coming Soon",
    image: "",
    tags: [],
    description:
      "We're continuously evolving. Book a call to discuss what you need built next.",
    comingSoon: true,
  },
];

const ExampleCard = ({ title, image, tags, description, comingSoon }) => (
  <div className="mb-8 break-inside-avoid relative group transition-transform duration-300 hover:-translate-y-2 w-full max-w-sm">
    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-surface-secondary bg-surface-panel h-full">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
        </>
      ) : (
        <div className="h-56 w-full bg-surface-bg flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-accent to-brand-secondary animate-pulse"></div>
        </div>
      )}

      {tags.length > 0 && (
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-brand-accent to-brand-secondary text-font-inverse text-xs px-3 py-1 rounded-full shadow-md font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="p-6 pt-16 flex flex-col relative z-10">
        <div className="absolute -top-6 left-6 w-12 h-1.5 rounded-full bg-gradient-to-r from-brand-accent to-brand-secondary shadow-lg"></div>
        <h3 className="text-2xl font-bold text-font-foreground mb-2 drop-shadow-md">
          {title}
        </h3>
        <p className="text-font-muted mb-6 text-base leading-relaxed">
          {description}
        </p>

        {comingSoon && (
          <div className="animate-pulse flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
            <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
            <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const ExampleSection = () => {
  return (
    <section
      className="py-20 px-4 w-full mx-auto bg-gradient-to-br from-surface-bg via-surface-secondary to-surface-bg shadow-2xl"
      id="examples"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-font-foreground text-center mb-2">
        Examples & Demos
      </h2>
      <p className="text-lg md:text-xl text-font-muted text-center mb-12 max-w-2xl mx-auto">
        A selection of projects and MVPs We have built. More Coming soon!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ExampleCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ExampleSection;
