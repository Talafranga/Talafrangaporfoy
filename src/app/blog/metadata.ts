import type { Metadata } from "next";
import { siteConfig } from "../config/siteConfig";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.author.name}`,
  description: "Read articles about web development, frontend technologies, React, Next.js and more by Talha Kaman",
  keywords: ["web development blog", "frontend blog", "react articles", "next.js tips", "coding tutorials"],
  openGraph: {
    title: `Blog | ${siteConfig.author.name}`,
    description: "Read articles about web development, frontend technologies, React, Next.js and more by Talha Kaman",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.blogOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} Blog`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.author.name}`,
    description: "Read articles about web development, frontend technologies, React, Next.js and more by Talha Kaman",
    images: [siteConfig.images.blogOgImage],
  },
}; 