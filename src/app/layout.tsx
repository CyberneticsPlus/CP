import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://cyberneticsplus.com'),
  title: {
    default: 'CyberNeticsPlus - Advanced Cybersecurity Solutions',
    template: '%s | CyberNeticsPlus'
  },
  description: 'Leading provider of advanced cybersecurity solutions including vulnerability management, penetration testing, cloud security, and managed SOC services.',
  keywords: 'cybersecurity, vulnerability management, penetration testing, cloud security, managed SOC, security solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'CyberNeticsPlus',
    images: [
      {
        url: '/images/hero/cybersecurity.jpg',
        width: 1200,
        height: 630,
        alt: 'CyberNeticsPlus - Advanced Cybersecurity Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cyberneticsplus',
    creator: '@cyberneticsplus'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-blue-900">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}