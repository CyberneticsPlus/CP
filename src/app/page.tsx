import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const SecurityApproach = dynamic(() => import('@/components/SecurityApproach'), {
  loading: () => <Loading />,
  ssr: true
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <Loading />,
  ssr: true
});

const CustomerReviews = dynamic(() => import('@/components/CustomerReviews'), {
  loading: () => <Loading />,
  ssr: true
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <Loading />,
  ssr: true
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Suspense fallback={<Loading />}>
        <SecurityApproach />
        <Features />
        <CustomerReviews />
        <Contact />
      </Suspense>
    </>
  );
}