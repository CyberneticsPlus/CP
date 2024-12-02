import { FC } from 'react';
import AnimatedSection from '../animations/AnimatedSection';

const FeatureHeader: FC = () => {
  return (
    <AnimatedSection delay={0.2} className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">CyberNeticsPlus</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Delivering enterprise-grade security solutions with measurable results and comprehensive protection
      </p>
    </AnimatedSection>
  );
};

export default FeatureHeader;