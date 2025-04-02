import type { Metadata } from "next";
import { siteConfig } from "../config/siteConfig";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.author.name}`,
  description: `Get in touch with ${siteConfig.author.name} for web development projects, collaboration opportunities, or any questions`,
  keywords: [`contact ${siteConfig.author.name.toLowerCase()}`, "frontend developer contact", "hire web developer", "freelance web developer"],
  openGraph: {
    title: `Contact | ${siteConfig.author.name}`,
    description: `Get in touch with ${siteConfig.author.name} for web development projects, collaboration opportunities, or any questions`,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.contactOgImage,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.author.name}`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${siteConfig.author.name}`,
    description: `Get in touch with ${siteConfig.author.name} for web development projects, collaboration opportunities, or any questions`,
    images: [siteConfig.images.contactOgImage],
  },
}; 