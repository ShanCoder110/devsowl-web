"use client";

import {
  FiRepeat,
  FiZap,
  FiCode,
  FiDatabase,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";

const automationSteps = [
  {
    icon: FiRepeat,
    title: "Workflow Triggered",
    description: "Start automations from any user or system event.",
  },
  {
    icon: FiZap,
    title: "AI Decides",
    description: "AI routes and transforms data contextually.",
  },
  {
    icon: FiCode,
    title: "Execute Logics",
    description: "APIs, webhooks, and functions fire based on flow.",
  },
  {
    icon: FiDatabase,
    title: "Sync Data",
    description: "Push updates across systems instantly.",
  },
  {
    icon: FiActivity,
    title: "Track Results",
    description: "Auto-log activity and metrics in real-time.",
  },
  {
    icon: FiTrendingUp,
    title: "Scale",
    description: "Replicate flows across teams or markets.",
  },
];

const Automations = () => {
  return (
    <section className="py-20 px-4 bg-surface-bg" id="automations">
      <h2 className="text-3xl md:text-4xl font-bold text-font-foreground text-center mb-2">
        Automations
      </h2>
      <p className="text-lg md:text-xl text-font-muted text-center mb-16 max-w-2xl mx-auto">
        How we streamline your business processes — intelligently and
        automatically.
      </p>

      <div className="flex overflow-x-auto space-x-10 max-w-full px-2 hide-scrollbar">
        {automationSteps.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="min-w-[260px] flex-shrink-0 bg-gradient-to-br from-surface-panel to-surface-secondary border border-[var(--color-white)/10] rounded-3xl px-6 py-8 shadow-xl relative group"
          >
            {/* Connector line */}
            {index < automationSteps.length - 1 && (
              <div className="absolute top-1/2 right-[-2.5rem] w-10 h-1 bg-brand-primary opacity-30 hidden lg:block"></div>
            )}

            {/* Icon circle */}
            <div className="w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition">
              <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-semibold text-font-foreground mb-2">
              {title}
            </h3>
            <p className="text-font-muted text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Automations;
