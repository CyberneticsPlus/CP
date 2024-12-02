import { IMAGES } from '../../constants/images';
import { preloadImages } from './preload';

const CRITICAL_IMAGES = [
  IMAGES.hero.cybersecurity,
  IMAGES.services.vulnerability,
  IMAGES.services.pentesting,
  IMAGES.services.cloud,
  IMAGES.services.soc,
] as const;

/**
 * Preloads critical application images during idle time
 */
export const preloadCriticalImages = () => {
  if (typeof window === 'undefined') return;

  const preloadWithOptions = () => {
    preloadImages(CRITICAL_IMAGES, {
      priority: 'high',
      formats: ['image/webp', 'image/avif'],
      timeout: 10000 // Increased timeout for larger images
    }).catch(error => {
      console.warn('Image preloading failed:', error);
    });
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(preloadWithOptions, { timeout: 2000 });
  } else {
    setTimeout(preloadWithOptions, 1000);
  }
};