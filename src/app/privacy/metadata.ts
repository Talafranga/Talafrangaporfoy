import type { Metadata } from "next";
import { siteConfig } from "../config/siteConfig";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.author.name}`,
  description: `Privacy policy for ${siteConfig.author.name}'s portfolio website detailing information collection and processing practices`,
  keywords: ["privacy policy", "data protection", "website privacy", `${siteConfig.author.name.toLowerCase()} privacy`],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.author.name}`,
    description: `Privacy policy for ${siteConfig.author.name}'s portfolio website detailing information collection and processing practices`,
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.privacyOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} Privacy Policy`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${siteConfig.author.name}`,
    description: `Privacy policy for ${siteConfig.author.name}'s portfolio website detailing information collection and processing practices`,
    images: [siteConfig.images.privacyOgImage],
  },
}; 