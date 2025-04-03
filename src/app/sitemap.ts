import { MetadataRoute } from 'next';
import { blogPosts } from './constants/blogPosts';
import { siteConfig } from './config/siteConfig';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = routing.locales;
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Create entries for each locale
  locales.forEach(locale => {
    // Get all blog posts
    const blogPostsUrls = blogPosts.map(post => ({
      url: `${baseUrl}/${locale}/blog/${post.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
    
    // Static routes
    const routes = [
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
      },
      {
        url: `${baseUrl}/${locale}/projects`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/${locale}/privacy`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
    ];
    
    sitemapEntries.push(...routes, ...blogPostsUrls);
  });
  
  return sitemapEntries;
} 