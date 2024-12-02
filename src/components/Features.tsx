import { FC } from 'react';
import BackgroundGradient from './features/BackgroundGradient';
import FeatureHeader from './features/FeatureHeader';
import FeatureList from './features/FeatureList';
import AnimatedSection from './animations/AnimatedSection';

const Features: FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <BackgroundGradient />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FeatureHeader />
        <FeatureList />
        
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Features;