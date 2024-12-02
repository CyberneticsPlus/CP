export const deferWork = (work: () => void, timeout = 2000) => {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => work(), { timeout });
  } else {
    setTimeout(work, timeout);
  }
};

export const preloadRoute = async (route: { preload: () => Promise<any> }) => {
  try {
    return await route.preload();
  } catch (error) {
    console.error('Failed to preload route:', error);
    return Promise.reject(error);
  }
};

export const measurePerformance = (label: string) => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    performance.mark(`${label}-start`);
    return () => {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
    };
  }
  return () => {};
};

export const optimizeImageLoading = (image: HTMLImageElement) => {
  if ('loading' in HTMLImageElement.prototype) {
    image.loading = 'lazy';
  }
  if ('decoding' in HTMLImageElement.prototype) {
    image.decoding = 'async';
  }
};

export const preloadCriticalAssets = () => {
  if (typeof window === 'undefined') return;

  const criticalAssets = [
    '/images/hero/cybersecurity.jpg',
    '/fonts/JetBrainsMono-Bold.woff',
  ];

  deferWork(() => {
    criticalAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = asset.endsWith('.woff') ? 'font' : 'image';
      link.href = asset;
      if (asset.endsWith('.woff')) {
        link.setAttribute('crossorigin', 'anonymous');
      }
      document.head.appendChild(link);
    });
  });
};