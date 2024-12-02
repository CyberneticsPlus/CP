import React, { Suspense } from 'react';
import Loading from '../common/Loading';
import ErrorBoundary from '../common/ErrorBoundary';

interface RouteWrapperProps {
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ component: Component }) => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

export default RouteWrapper;