# SEO Guide for Portfolio Website

## Overview

This document provides an overview of the SEO implementations in this portfolio website. Understanding these elements will help maintain good search engine visibility.

## Key Components

### 1. Central Configuration

All SEO-related configurations are centralized in `src/app/config/siteConfig.ts`. This file contains:

- Site information (title, description)
- URLs
- Author information
- Image paths
- SEO settings
- Navigation links

**Always update this file when making site-wide changes.**

### 2. Metadata

Next.js metadata is implemented at different levels:

- Root metadata in `layout.tsx`
- Page-specific metadata in each page directory:
  - `/blog/metadata.ts`
  - `/projects/metadata.ts`
  - `/contact/metadata.ts`
  - `/privacy/metadata.ts`
- Dynamic metadata for blog posts in `/blog/[id]/generateMetadata.ts`

### 3. Structured Data

Structured data is implemented throughout the site:

- `components/StructuredData.tsx` contains all structured data components
- Home page: Person and Website schema
- Blog posts: BlogPosting schema
- Projects: CreativeWork schema

### 4. Sitemap & Robots.txt

- Sitemap generated via `next-sitemap.config.js` and `src/app/sitemap.ts`
- Manual robots.txt in `src/app/robots.txt`

### 5. Image Optimization

All images are optimized using:

- `OptimizedImage.tsx` component that uses Next.js image optimization
- Proper width, height and alt text
- Lazy loading

### 6. Performance Considerations

- Server-side rendering with client-side hydration
- Each page has a `mounted` state to ensure proper rendering
- Consistent loading patterns

### 7. Accessibility

- Semantic HTML
- Proper heading hierarchy
- ARIA labels
- Color contrast in themes

## SEO Maintenance Checklist

- [ ] Verify all images have proper alt text
- [ ] Ensure all pages have appropriate meta descriptions
- [ ] Test structured data using Google's Structured Data Testing Tool
- [ ] Generate proper OpenGraph images for all pages
- [ ] Run Lighthouse audits regularly
- [ ] Verify canonicalization is properly set up
- [ ] Check mobile optimization
- [ ] Verify analytics implementation

## Scripts for SEO

- `scripts/generate-og-images.js` - Checks for required SEO images
- `scripts/create-blog-post.js` - Helps with SEO-friendly blog post creation

## Resources

- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Console](https://search.google.com/search-console)
- [Structured Data Testing Tool](https://validator.schema.org/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [OpenGraph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards)
