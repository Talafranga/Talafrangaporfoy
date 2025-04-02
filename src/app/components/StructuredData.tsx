'use client';

type PersonStructuredDataProps = {
  name: string;
  url: string;
  jobTitle: string;
  image?: string;
  sameAs?: string[];
};

export function PersonStructuredData({
  name,
  url,
  jobTitle,
  image,
  sameAs = [],
}: PersonStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    jobTitle,
    ...(image && { image }),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type WebsiteStructuredDataProps = {
  name: string;
  url: string;
  description: string;
};

export function WebsiteStructuredData({
  name,
  url,
  description,
}: WebsiteStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type BlogPostStructuredDataProps = {
  headline: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  description: string;
  url: string;
  publisherName: string;
  publisherLogo: string;
};

export function BlogPostStructuredData({
  headline,
  image,
  datePublished,
  dateModified,
  authorName,
  description,
  url,
  publisherName,
  publisherLogo,
}: BlogPostStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type ProjectStructuredDataProps = {
  name: string;
  description: string;
  url: string;
  image: string;
  creator: string;
  keywords?: string[];
};

export function ProjectStructuredData({
  name,
  description,
  url,
  image,
  creator,
  keywords = [],
}: ProjectStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    image,
    creator: {
      "@type": "Person",
      name: creator,
    },
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 