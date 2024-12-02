import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';

interface ServiceBannerProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({
  title,
  description,
  image,
  icon,
}) => {
  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <AnimatedSection className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
      </AnimatedSection>
    </div>
  );
};

export default ServiceBanner;