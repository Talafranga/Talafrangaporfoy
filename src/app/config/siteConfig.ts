/**
 * Central configuration file for the portfolio website
 * All site-wide constants and configuration should be stored here
 */

export const siteConfig = {
  // Site information
  name: "Talha Kaman Portfolio",
  title: "Talha Kaman | Software Developer",
  description: "Portfolio of Talha Kaman, a passionate Software Developer specializing in React, Next.js, and modern web technologies",
  
  // URLs
  url: "https://talhakaman.com",
  baseUrl: "https://talhakaman.com",
  
  // Author information
  author: {
    name: "Mustafa Talha Kaman",
    jobTitle: "Software Developer",
    email: "kamantalhaa2@gmail.com",
    github: "https://github.com/Talafranga",
    linkedin: "https://www.linkedin.com/in/talha-kaman/",
    leetcode: "https://leetcode.com/u/talafranga/"
  },
  
  // Images and assets
  images: {
    logo: "/logo.png",
    avatar: "/images/talha-kaman.jpg",
    ogImage: "/images/og-image.png",
    projectsOgImage: "/images/og-image.png",
    blogOgImage: "/images/og-image.png",
    contactOgImage: "/images/og-image.png",
    privacyOgImage: "/images/og-image.png",
    favicon: "/favicon.ico",
    placeholder: "/placeholder-image.jpg"
  },
  
  // SEO and metadata
  seo: {
    googleVerification: "", // Auto-verified, no code needed
    bingVerification: "557FD99D9041FE4623065525DD9F52D6", // Bing verification code
    locale: "en_US",
    defaultTwitterHandle: "@talha_kaman"
  },
  
  // Navigation
  navigation: {
    main: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" }
    ],
    social: [
      { name: "GitHub", url: "https://github.com/Talafranga", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/talha-kaman/", icon: "linkedin" },
      { name: "LeetCode", url: "https://leetcode.com/u/talafranga/", icon: "leetcode" }
    ]
  },
  
  // Performance settings
  performance: {
    imageQuality: 85,
    lazyLoadImages: true,
    priorityHeaderImages: true,
    useSWRForData: true,
    preloadMainPageLinks: true,
    fontDisplay: 'swap',
    imageSizes: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920
    }
  }
}; 