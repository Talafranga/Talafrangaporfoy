/** @type {import('next-sitemap').IConfig} */

// Cannot directly import from src/app/config, so we define the URL here
const SITE_URL = 'https://www.talhakaman.com';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${SITE_URL}/server-sitemap.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/privacy']
      }
    ]
  },
  transform: async (config, path) => {
    // Custom transform function for dynamic prioritization
    // Customize priorities based on the path
    let priority = config.priority;
    
    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
    } else if (path === '/projects') {
      priority = 0.9;
    } else if (path === '/blog') {
      priority = 0.8;
    } else if (path === '/contact') {
      priority = 0.6;
    }

    // Return the transformed data
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 