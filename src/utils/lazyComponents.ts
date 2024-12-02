import { lazy } from 'react';

export const lazyWithPreload = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  preloadAfterMs: number = 2000
) => {
  const Component = lazy(factory);
  let preloaded = false;

  const preload = () => {
    if (!preloaded) {
      preloaded = true;
      factory();
    }
  };

  if (typeof window !== 'undefined') {
    // Preload after specified delay if user hasn't navigated away
    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        preload();
      }
    }, preloadAfterMs);

    // Preload on hover of any navigation link
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && !preloaded) {
        preload();
      }
    });
  }

  return Component;
};