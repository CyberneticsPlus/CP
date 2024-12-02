import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';

interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </AnimatedSection>
  );
};

export default ServiceFeatures;