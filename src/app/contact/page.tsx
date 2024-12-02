import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CyberNeticsPlus',
  description: 'Get in touch with our cybersecurity experts for consultation and support.',
};

export default function ContactPage() {
  return <Contact />;
}