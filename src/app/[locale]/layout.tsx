import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "../context/ThemeContext";
import { siteConfig } from "../config/siteConfig";
import BrowserDetection from '../components/BrowserDetection';
import Footer from '../components/Footer';
import type { Metadata, Viewport } from "next";
import { setRequestLocale } from 'next-intl/server';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

// Allow dynamic locale params
export const dynamicParams = true;

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  // Make sure params is properly awaited
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const baseDomain = new URL(siteConfig.url);

  return {
    metadataBase: baseDomain,
    title: "Talha Kaman | Software Developer",
    description: siteConfig.description,
    keywords: ["software developer", "frontend developer", "react developer", "next.js", "web development", "portfolio", "talha kaman"],
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    openGraph: {
      type: "website",
      locale: locale,
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
    }
  };
}

// Viewport metadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3b82f6'
};

// HTML Attributes
export async function generateHtmlAttributes({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  return {
    lang: resolvedParams.locale
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
  
  return (
    <>
      <link rel="preload" as="image" href={siteConfig.images.logo} />
      <meta name="msvalidate.01" content={siteConfig.seo.bingVerification} />
      
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="prefetch" href={`/${locale}/projects`} />
      <link rel="prefetch" href={`/${locale}/blog`} />
      
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Optimize startup performance
            document.documentElement.classList.add('js-loading');
          `,
        }}
      />
      
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider>
          <BrowserDetection />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </NextIntlClientProvider>
      
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
    </>
  );
} 