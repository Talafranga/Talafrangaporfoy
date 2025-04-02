'use client';

import { PersonStructuredData, WebsiteStructuredData } from '../components/StructuredData';
import { siteConfig } from '../config/siteConfig';

export default function HomeStructuredData() {
  return (
    <>
      <PersonStructuredData
        name={siteConfig.author.name}
        url={siteConfig.url}
        jobTitle={siteConfig.author.jobTitle}
        image={`${siteConfig.url}${siteConfig.images.avatar}`}
        sameAs={[
          siteConfig.author.github,
          siteConfig.author.linkedin,
          siteConfig.author.leetcode,
        ]}
      />
      <WebsiteStructuredData
        name={siteConfig.name}
        url={siteConfig.url}
        description={siteConfig.description}
      />
    </>
  );
} 