import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Loading from '../Loading';

// Lazy load all pages
const HomePage = React.lazy(() => import('../../pages/HomePage'));
const AboutUs = React.lazy(() => import('../../pages/AboutUs'));
const ContactUs = React.lazy(() => import('../../pages/ContactUs'));
const VulnerabilityManagement = React.lazy(() => import('../../pages/VulnerabilityManagement'));
const PenetrationTesting = React.lazy(() => import('../../pages/PenetrationTesting'));
const CloudSecurity = React.lazy(() => import('../../pages/CloudSecurity'));
const ManagedSOC = React.lazy(() => import('../../pages/ManagedSOC'));

const LazyRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => (
  <React.Suspense fallback={<Loading />}>
    {element}
  </React.Suspense>
);

export const RouteConfig: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LazyRoute element={<HomePage />} />} />
      <Route path={ROUTES.about} element={<LazyRoute element={<AboutUs />} />} />
      <Route path={ROUTES.contact} element={<LazyRoute element={<ContactUs />} />} />
      <Route
        path={ROUTES.services.vulnerabilityManagement}
        element={<LazyRoute element={<VulnerabilityManagement />} />}
      />
      <Route
        path={ROUTES.services.penetrationTesting}
        element={<LazyRoute element={<PenetrationTesting />} />}
      />
      <Route
        path={ROUTES.services.cloudSecurity}
        element={<LazyRoute element={<CloudSecurity />} />}
      />
      <Route
        path={ROUTES.services.managedSoc}
        element={<LazyRoute element={<ManagedSOC />} />}
      />
    </Routes>
  );
};