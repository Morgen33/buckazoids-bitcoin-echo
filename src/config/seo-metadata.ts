
// Default SEO data types
export interface JsonLdWebsite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  publisher?: {
    '@type': string;
    name: string;
    logo?: {
      '@type': string;
      url: string;
    };
  };
}

export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage: string;
  ogType?: string;
  jsonLd?: any;
  noIndex?: boolean;
}

// Base domain for the site
const SITE_URL = window.location.origin;

// Default SEO values (preserving existing metadata from index.html)
export const defaultSeo: PageSeo & { siteUrl: string } = {
  siteUrl: SITE_URL,
  title: "Buckazoids - A Digital Currency from 1986... Rediscovered in 2025",
  description: "Buckazoids is the meme of Bitcoin. The world needs to know that Buckazoids was the first digital currency that showcased the Bitcoin logo before the creation of Bitcoin.",
  keywords: [
    "buckazoids", "bitcoin", "meme coin", "crypto", "cryptocurrency", 
    "solana", "digital currency", "space quest", "blockchain", "altcoin"
  ],
  ogImage: `${SITE_URL}/lovable-uploads/buckazoid-token.png`,
  ogType: "website",
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Buckazoids',
    url: SITE_URL,
    description: "Buckazoids is the meme of Bitcoin. The world needs to know that Buckazoids was the first digital currency that showcased the Bitcoin logo before the creation of Bitcoin.",
    publisher: {
      '@type': 'Organization',
      name: 'Buckazoids Team',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/lovable-uploads/buckazoid-token.png`
      }
    }
  }
};

// Page-specific SEO metadata
export const pageSeoData: Record<string, PageSeo> = {
  home: {
    ...defaultSeo,
    title: "Buckazoids - A Digital Currency from 1986... Rediscovered in 2025",
    ogType: "website",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Buckazoids',
      url: SITE_URL,
      description: "Buckazoids is the meme of Bitcoin. The world needs to know that Buckazoids was the first digital currency that showcased the Bitcoin logo before the creation of Bitcoin.",
      publisher: {
        '@type': 'Organization',
        name: 'Buckazoids Team',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/lovable-uploads/0cfa1a1f-d025-4c12-9b77-2970252ee0c8.png`
        }
      }
    }
  },
  about: {
    ...defaultSeo,
    title: "About Buckazoids | Crypto Currency History",
    description: "Learn about Buckazoids - the digital currency that appeared in Sierra's Space Quest decades before Bitcoin. Discover the historical significance and connection to modern crypto.",
    keywords: ["buckazoids history", "space quest currency", "bitcoin predecessor", "crypto history", "digital currency history", "buckazoids origin"],
    ogType: "article",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'About Buckazoids',
      description: "Learn about Buckazoids - the digital currency that appeared in Sierra's Space Quest decades before Bitcoin.",
      image: `${SITE_URL}/lovable-uploads/0cfa1a1f-d025-4c12-9b77-2970252ee0c8.png`,
      publisher: {
        '@type': 'Organization',
        name: 'Buckazoids Team',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/lovable-uploads/0cfa1a1f-d025-4c12-9b77-2970252ee0c8.png`
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/about`
      }
    }
  },
  news: {
    ...defaultSeo,
    title: "Buckazoids News | Latest Updates",
    description: "Stay updated with the latest news and announcements from the Buckazoids ecosystem. Follow our journey as we connect crypto history with the future.",
    keywords: ["buckazoids news", "crypto news", "blockchain updates", "digital currency news", "buckazoids updates"],
    ogType: "blog",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Buckazoids News',
      description: "Stay updated with the latest news and announcements from the Buckazoids ecosystem.",
      url: `${SITE_URL}/news`,
      publisher: {
        '@type': 'Organization',
        name: 'Buckazoids Team'
      }
    }
  },
  buy: {
    ...defaultSeo,
    title: "Buy Buckazoids | How to Purchase",
    description: "Learn how to buy Buckazoids on Solana blockchain. Step-by-step guide for purchasing the digital currency inspired by gaming history.",
    keywords: ["buy buckazoids", "purchase buckazoids", "buckazoids solana", "how to buy buckazoids", "buckazoids purchase guide"],
    ogType: "article",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Buy Buckazoids',
      description: "Step-by-step guide for purchasing Buckazoids on the Solana blockchain.",
      step: [
        {
          '@type': 'HowToStep',
          name: 'Watch the Tutorial',
          text: 'Watch our step-by-step video guide.'
        },
        {
          '@type': 'HowToStep',
          name: 'Follow Instructions',
          text: 'Follow the detailed instructions to purchase Buckazoids safely.'
        }
      ]
    }
  },
  community: {
    ...defaultSeo,
    title: "Buckazoids Community | Join Us",
    description: "Join the Buckazoids community. Connect with fellow enthusiasts, developers, and crypto historians exploring this rediscovered piece of digital currency history.",
    keywords: ["buckazoids community", "join buckazoids", "crypto community", "blockchain community", "digital currency community"],
    ogType: "website",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Buckazoids Community',
      description: "Join the Buckazoids community. Connect with fellow enthusiasts, developers, and crypto historians."
    }
  },
  contact: {
    ...defaultSeo,
    title: "Contact Buckazoids | Get In Touch",
    description: "Contact the Buckazoids team. Have questions or suggestions? We'd love to hear from you.",
    keywords: ["contact buckazoids", "buckazoids support", "buckazoids team", "reach buckazoids"],
    ogType: "website",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Buckazoids',
      description: "Contact the Buckazoids team. Have questions or suggestions? We'd love to hear from you."
    }
  }
};
