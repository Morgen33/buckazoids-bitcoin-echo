
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { defaultSeo, PageSeo } from '@/config/seo-metadata';

interface SEOProps extends Partial<PageSeo> {
  // Optional overrides - only used if explicitly passed
  pageName?: string;
}

export const SEO = ({ 
  pageName,
  title, 
  description, 
  keywords,
  canonical,
  ogImage,
  ogType,
  jsonLd,
  noIndex = false
}: SEOProps) => {
  const location = useLocation();
  
  // Find the page-specific SEO data or use defaults
  const mergedSEO = {
    title: title || defaultSeo.title,
    description: description || defaultSeo.description,
    keywords: keywords || defaultSeo.keywords,
    canonical: canonical || `${defaultSeo.siteUrl}${location.pathname}`,
    ogImage: ogImage || defaultSeo.ogImage,
    ogType: ogType || 'website',
    jsonLd: jsonLd || defaultSeo.jsonLd,
  };

  // Generate structured JSON-LD data
  const structuredData = {
    __html: JSON.stringify(mergedSEO.jsonLd)
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{pageName ? `${pageName} | Buckazoids` : mergedSEO.title}</title>
      <meta name="description" content={mergedSEO.description} />
      <meta name="keywords" content={mergedSEO.keywords?.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={mergedSEO.canonical} />
      
      {/* Robot control */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph / Facebook metadata */}
      <meta property="og:title" content={pageName ? `${pageName} | Buckazoids` : mergedSEO.title} />
      <meta property="og:description" content={mergedSEO.description} />
      <meta property="og:url" content={mergedSEO.canonical} />
      <meta property="og:type" content={mergedSEO.ogType} />
      <meta property="og:image" content={mergedSEO.ogImage} />
      
      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageName ? `${pageName} | Buckazoids` : mergedSEO.title} />
      <meta name="twitter:description" content={mergedSEO.description} />
      <meta name="twitter:image" content={mergedSEO.ogImage} />
      
      {/* JSON-LD Structured Data */}
      {mergedSEO.jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={structuredData} />
      )}
      
      {/* Cache control */}
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" />
    </Helmet>
  );
};
