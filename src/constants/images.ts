// Image path constants
export const IMAGES = {
  hero: {
    cybersecurity: '/images/hero/cybersecurity.jpg',
  },
  services: {
    vulnerability: '/images/services/vulnerability.jpg',
    pentesting: '/images/services/pentesting.jpg',
    cloud: '/images/services/cloud.jpg',
    soc: '/images/services/soc.jpg',
  },
  about: {
    team: '/images/about/team.jpg',
  },
  recognitions: {
    clutch: '/images/recognitions/clutch.png',
    gartner: '/images/recognitions/gartner.png',
    forrester: '/images/recognitions/forrester.png',
    iso: '/images/recognitions/iso.png',
  },
} as const;

// Type definitions
type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

interface PreloadOptions {
  formats?: ImageFormat[];
  timeout?: number;
  priority?: 'high' | 'low' | 'auto';
}

interface PreloadResult {
  url: string;
  success: boolean;
  error?: string;
}

/**
 * Preloads critical images for optimal page performance
 * 
 * @param urls - Array of image URLs to preload
 * @param options - Optional configuration for preloading behavior
 * @returns Promise that resolves when all critical images are loaded
 * 
 * @example
 * ```typescript
 * const criticalImages = [IMAGES.hero.cybersecurity, IMAGES.services.cloud];
 * await preloadCriticalImages(criticalImages, { priority: 'high' });
 * ```
 */
export const preloadCriticalImages = async (
  urls: string[],
  options: PreloadOptions = {}
): Promise<PreloadResult[]> => {
  const {
    formats = ['image/webp', 'image/avif'],
    timeout = 5000,
    priority = 'auto'
  } = options;

  // Validate input
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error('preloadCriticalImages requires an array of image URLs');
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const preloadTasks = urls.map(async (url): Promise<PreloadResult> => {
    try {
      // Create preload link
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      
      if (priority !== 'auto') {
        link.setAttribute('fetchpriority', priority);
      }

      // Add support for modern image formats
      if (formats.length > 0) {
        link.setAttribute('type', formats[0]);
      }

      document.head.appendChild(link);

      // Create image object for actual loading
      const image = new Image();
      image.src = url;

      await Promise.race([
        new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        }),
        new Promise((_, reject) => {
          controller.signal.addEventListener('abort', () => 
            reject(new Error('Image preload timeout'))
          );
        })
      ]);

      return { url, success: true };
    } catch (error) {
      console.error(`Failed to preload image: ${url}`, error);
      return {
        url,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  });

  try {
    const results = await Promise.all(preloadTasks);
    return results;
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * Helper function to preload all critical images for the application
 */
export const preloadAppCriticalImages = () => {
  const criticalImages = [
    IMAGES.hero.cybersecurity,
    IMAGES.services.vulnerability,
    IMAGES.services.pentesting,
    IMAGES.services.cloud,
    IMAGES.services.soc,
  ];

  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadCriticalImages(criticalImages, {
          priority: 'high',
          formats: ['image/webp', 'image/avif']
        }).catch(error => {
          console.error('Failed to preload critical images:', error);
        });
      });
    } else {
      setTimeout(() => {
        preloadCriticalImages(criticalImages, {
          priority: 'high',
          formats: ['image/webp', 'image/avif']
        }).catch(error => {
          console.error('Failed to preload critical images:', error);
        });
      }, 1000);
    }
  }
};