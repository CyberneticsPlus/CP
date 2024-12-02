import React from 'react';
import { Trophy } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';
import { IMAGES } from '../constants/images';

const CompanyRecognitions = () => {
  return (
    <section className="py-20 bg-gray-800/30">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industry Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading industry authorities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recognitions.map((recognition, index) => (
            <AnimatedSection
              key={index}
              delay={0.1 * index}
              className="flex flex-col items-center"
            >
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 w-full aspect-square flex items-center justify-center">
                <img
                  src={recognition.image}
                  alt={recognition.name}
                  className="max-w-[120px] max-h-[120px] object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold">{recognition.name}</h3>
                <p className="text-gray-400 text-sm">{recognition.year}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

const recognitions = [
  {
    name: 'Clutch Top Cybersecurity Company',
    year: '2024',
    image: IMAGES.recognitions.clutch
  },
  {
    name: 'Gartner Market Leader',
    year: '2023',
    image: IMAGES.recognitions.gartner
  },
  {
    name: 'Forrester Wave Leader',
    year: '2023',
    image: IMAGES.recognitions.forrester
  },
  {
    name: 'ISO 27001 Certified',
    year: '2023',
    image: IMAGES.recognitions.iso
  }
];

export default CompanyRecognitions;