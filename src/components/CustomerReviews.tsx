"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const CustomerReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
      scrollElement.scrollLeft = 0;
    } else {
      scrollElement.scrollLeft += 1;
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, [scroll]);

  return (
    <section className="py-20 bg-gray-800/30">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
        >
          {/* Add your review cards here */}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CustomerReviews;