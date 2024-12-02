import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'CyberNeticsPlus - Advanced Cybersecurity Solutions',
  description = 'Leading provider of advanced cybersecurity solutions including vulnerability management, penetration testing, cloud security, and managed SOC services. Protect your digital assets with our expert team.',
  canonicalUrl = 'https://cyberneticsplus.com',
  image = '/images/hero/cybersecurity.jpg',
  type = 'website'
}) => {
  const siteTitle = 'CyberNeticsPlus';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;