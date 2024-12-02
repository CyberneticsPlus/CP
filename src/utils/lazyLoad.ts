import { lazy, ComponentType } from 'react';

type LazyComponent<T extends ComponentType<any>> = T & {
  preload: () => Promise<{ default: T }>;
};

export function lazyWithPreload<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): LazyComponent<T> {
  const Component = lazy(factory);
  let factoryPromise: Promise<{ default: T }> | null = null;

  const LoadableComponent = Component as LazyComponent<T>;

  LoadableComponent.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory();
    }
    return factoryPromise;
  };

  return LoadableComponent;
}