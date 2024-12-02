import AboutUs from '@/components/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - CyberNeticsPlus',
  description: 'Learn about our mission, values, and commitment to cybersecurity excellence.',
};

export default function AboutPage() {
  return <AboutUs />;
}