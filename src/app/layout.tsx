import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { siteConfig } from "./config/siteConfig";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["frontend developer", "react developer", "next.js", "web development", "portfolio", "talha kaman"],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.images.ogImage],
    creator: siteConfig.seo.defaultTwitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: siteConfig.images.favicon,
    shortcut: siteConfig.images.favicon,
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: siteConfig.seo.googleVerification,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  metadataBase: new URL(siteConfig.url),
  themeColor: '#3b82f6',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    title: siteConfig.title,
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Preload critical assets */}
        <link rel="preload" as="image" href={siteConfig.images.logo} />
        {/* Add Bing verification as a meta tag */}
        <meta name="msvalidate.01" content={siteConfig.seo.bingVerification} />
        
        {/* Speed optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/blog" />
        
        {/* Script to optimize web vitals (placed in head to execute early) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize startup performance
              document.documentElement.classList.add('js-loading');
              
              // Add browser detection
              const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
              const isSafari = navigator.userAgent.indexOf('Safari') > -1 && !isChrome;
              document.documentElement.classList.add(isChrome ? 'is-chrome' : isSafari ? 'is-safari' : 'is-other-browser');
              
              // Detect connection speed and apply optimizations
              if (navigator.connection && navigator.connection.effectiveType) {
                document.documentElement.classList.add('connection-' + navigator.connection.effectiveType);
              }
              
              // Mark the page as interactive as soon as possible
              window.addEventListener('DOMContentLoaded', () => {
                document.documentElement.classList.remove('js-loading');
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Web Vitals Monitoring Script (loads after content) */}
        <script 
          defer
          dangerouslySetInnerHTML={{
            __html: `
              // Load web-vitals monitoring
              import('/scripts/webVitals.js').then(module => {
                module.optimizeWebVitals();
              }).catch(err => {
                console.error('Error loading web-vitals:', err);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
