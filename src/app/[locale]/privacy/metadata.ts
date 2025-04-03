import type { Metadata } from "next";
import { siteConfig } from "../../config/siteConfig";
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
  const locale = params.locale;
  
  // Get translation function
  const t = await getTranslations('Privacy');
  const metadata = await getTranslations('Metadata');

  return {
    title: `${locale === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'} | ${siteConfig.author.name}`,
    description: `${locale === 'tr' ? 'Talha Kaman\'ın portfolyo web sitesi için gizlilik politikası' : `Privacy policy for ${siteConfig.author.name}'s portfolio website`}`,
    keywords: [
      locale === 'tr' ? 'gizlilik politikası' : 'privacy policy', 
      locale === 'tr' ? 'veri koruması' : 'data protection', 
      locale === 'tr' ? 'website gizliliği' : 'website privacy', 
      `${siteConfig.author.name.toLowerCase()} ${locale === 'tr' ? 'gizlilik' : 'privacy'}`
    ],
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${locale === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'} | ${siteConfig.author.name}`,
      description: `${locale === 'tr' ? 'Talha Kaman\'ın portfolyo web sitesi için gizlilik politikası' : `Privacy policy for ${siteConfig.author.name}'s portfolio website`}`,
      url: `${siteConfig.url}/${locale}/privacy`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.images.privacyOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.author.name} ${locale === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${locale === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'} | ${siteConfig.author.name}`,
      description: `${locale === 'tr' ? 'Talha Kaman\'ın portfolyo web sitesi için gizlilik politikası' : `Privacy policy for ${siteConfig.author.name}'s portfolio website`}`,
      images: [siteConfig.images.privacyOgImage],
    },
  };
}; 