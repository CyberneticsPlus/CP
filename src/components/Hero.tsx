import React from 'react';
import { Shield } from 'lucide-react';
import CyberShieldAnimation from './CyberShieldAnimation';
import AnimatedSection from './animations/AnimatedSection';

const Hero = () => {
  return (
    <AnimatedSection className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">We</span>
              <span className="block text-blue-400">Guarantee Your</span>
              <span className="block">Digital Security!</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Protecting your digital assets with advanced AI-driven security solutions. Stay ahead of cyber threats with our cutting-edge technology.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Get Protected Now
                <Shield className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full h-[400px] rounded-lg shadow-lg lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-lg"></div>
              <CyberShieldAnimation />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;