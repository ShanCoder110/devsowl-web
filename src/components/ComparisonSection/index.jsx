import {
  FiLayers,
  FiUsers,
  FiPenTool,
  FiDollarSign,
  FiServer,
  FiCheckCircle,
  FiCloud,
} from "react-icons/fi";
import { TfiTimer } from "react-icons/tfi";
import { LuRocket } from "react-icons/lu";
import { BiBrain } from "react-icons/bi";

const FeatureItem = ({ icon: Icon, children, color }) => (
  <li className="flex items-start gap-3 text-font-muted">
    <Icon className={`w-5 h-5 mt-1 text-state-${color}`} />
    {children}
  </li>
);

const ComparisonSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-surface-bg">
      <h2 className="text-3xl md:text-4xl font-bold text-font-foreground text-center mb-2">
        The Future of Development Is Here
      </h2>
      <p className="text-lg md:text-xl text-font-muted text-center mb-12 max-w-2xl">
        See how our AI-powered approach redefines what's possible compared to
        traditional agencies.
      </p>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {/* Traditional Approach */}
        <div className="flex-1 bg-surface-secondary/70 rounded-2xl shadow-lg p-6 border border-surface-panel backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-state-danger/20 text-state-danger rounded-full p-2">
              <FiLayers className="w-5 h-5" />
            </span>
            <span className="text-lg font-semibold text-state-danger">
              Traditional Approach
            </span>
          </div>
          <ul className="space-y-4 mt-4">
            <FeatureItem icon={TfiTimer} color="danger">
              Lengthy Timelines
            </FeatureItem>
            <FeatureItem icon={FiUsers} color="danger">
              Bloated Teams
            </FeatureItem>
            <FeatureItem icon={FiPenTool} color="danger">
              Excessive Design Phases
            </FeatureItem>
            <FeatureItem icon={FiDollarSign} color="danger">
              High Upfront Costs
            </FeatureItem>
            <FeatureItem icon={FiServer} color="danger">
              Complex Infrastructure
            </FeatureItem>
          </ul>
        </div>

        {/* AI-Powered Approach */}
        <div className="flex-1 bg-surface-panel/70 rounded-2xl shadow-lg p-6 border border-surface-panel backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-primary/20 text-brand-primary rounded-full p-2">
              <LuRocket className="w-5 h-5" />
            </span>
            <span className="text-lg font-semibold text-brand-primary">
              Our AI-Powered Approach
            </span>
          </div>
          <ul className="space-y-4 mt-4 text-font-muted">
            <FeatureItem icon={LuRocket} color="brand-primary">
              Rapid MVP Development
            </FeatureItem>
            <FeatureItem icon={BiBrain} color="brand-primary">
              AI-Augmented Team
            </FeatureItem>
            <FeatureItem icon={FiPenTool} color="brand-primary">
              No Lengthy Design Phase
            </FeatureItem>
            <FeatureItem icon={FiCheckCircle} color="brand-primary">
              Cost-Effective Validation
            </FeatureItem>
            <FeatureItem icon={FiCloud} color="brand-primary">
              Scalable Infrastructure
            </FeatureItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
