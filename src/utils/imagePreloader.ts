/**
 * Preloads a single image and returns a promise
 */
export const preloadImage = (src: string): Promise<void> => {
  if (!src.startsWith('/')) {
    console.warn('Image path should start with /', src);
    return Promise.reject(new Error('Invalid image path'));
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Preloads an array of images
 */
export const preloadImages = async (images: string[]): Promise<void[]> => {
  const preloadPromises = images.map(src => {
    // Add preload link
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);

    // Also create Image object to ensure loading
    return preloadImage(src);
  });

  return Promise.allSettled(preloadPromises).then(results => {
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.error(`Failed to preload image ${images[index]}:`, result.reason);
      }
    });
    return results.map(result => 
      result.status === 'fulfilled' ? result.value : Promise.reject(result.reason)
    );
  });
};

/**
 * Preloads critical images for the application
 */
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/images/hero/cybersecurity.jpg',
    '/images/services/vulnerability.jpg',
    '/images/services/pentesting.jpg',
    '/images/services/cloud.jpg',
    '/images/services/soc.jpg',
  ];

  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadImages(criticalImages).catch(error => {
          console.warn('Image preloading failed:', error);
        });
      });
    } else {
      setTimeout(() => {
        preloadImages(criticalImages).catch(error => {
          console.warn('Image preloading failed:', error);
        });
      }, 1000);
    }
  }
};