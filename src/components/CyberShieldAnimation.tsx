import React, { memo, useEffect, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { IMAGES } from '../constants/images';

const CyberShieldAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageUrl = IMAGES.hero.cybersecurity;

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsImageLoaded(true);
    img.src = imageUrl;
  }, [imageUrl]);

  const animationProps = prefersReducedMotion ? {
    initial: { opacity: 1 },
    animate: { opacity: 1 }
  } : {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 }
  };

  const renderPulsingDots = useCallback(() => {
    return [0, 100, 200].map((delay) => (
      <div
        key={delay}
        className={`w-2 h-2 rounded-full ${
          prefersReducedMotion ? 'bg-blue-500' : 'animate-pulse'
        }`}
        style={!prefersReducedMotion ? { animationDelay: `${delay}ms` } : {}}
      />
    ));
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
      
      {isImageLoaded && (
        <motion.div {...animationProps} className="relative w-full h-full">
          <img
            src={imageUrl}
            alt="Advanced Cybersecurity Protection"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-2xl"></div>
        </motion.div>
      )}

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-6 left-6 right-6 text-white"
      >
        <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-500">System Protected</span>
          </div>
          <div className="text-xs text-gray-300">
            Advanced threat detection active • Real-time monitoring enabled
          </div>
        </div>
      </motion.div>

      <div className="absolute top-4 right-4 flex space-x-2">
        {renderPulsingDots()}
      </div>
    </div>
  );
};

export default memo(CyberShieldAnimation);