import type { Metadata } from "next";
import { siteConfig } from "../config/siteConfig";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.author.name}`,
  description: "Explore my portfolio of web development projects including React, Next.js, and modern frontend technologies",
  keywords: ["frontend projects", "web development portfolio", "react projects", "next.js projects", "talha kaman projects"],
  openGraph: {
    title: `Projects | ${siteConfig.author.name}`,
    description: "Explore my portfolio of web development projects including React, Next.js, and modern frontend technologies",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.projectsOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} Projects`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${siteConfig.author.name}`,
    description: "Explore my portfolio of web development projects including React, Next.js, and modern frontend technologies",
    images: [siteConfig.images.projectsOgImage],
  },
}; 