import { PreloadOptions, PreloadResult } from './types';
import { validateImagePath, getImageType } from './validation';

/**
 * Preloads a single image and returns a promise
 */
const preloadSingleImage = async (
  url: string,
  options: PreloadOptions,
  signal: AbortSignal
): Promise<PreloadResult> => {
  try {
    if (!validateImagePath(url)) {
      throw new Error(`Invalid image path: ${url}`);
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    
    if (options.priority !== 'auto') {
      link.setAttribute('fetchpriority', options.priority || 'auto');
    }

    // Try to determine image type from path
    const imageType = getImageType(url);
    if (imageType) {
      link.setAttribute('type', imageType);
    } else if (options.formats?.length) {
      link.setAttribute('type', options.formats[0]);
    }

    document.head.appendChild(link);

    const image = new Image();
    image.src = url;

    await Promise.race([
      new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      }),
      new Promise((_, reject) => {
        signal.addEventListener('abort', () => 
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
};

/**
 * Preloads multiple images with configurable options
 */
export const preloadImages = async (
  urls: string[],
  options: PreloadOptions = {}
): Promise<PreloadResult[]> => {
  const {
    formats = ['image/webp', 'image/avif'],
    timeout = 5000,
    priority = 'auto'
  } = options;

  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error('preloadImages requires an array of image URLs');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const results = await Promise.all(
      urls.map(url => preloadSingleImage(url, { formats, priority }, controller.signal))
    );
    return results;
  } finally {
    clearTimeout(timeoutId);
  }
};
