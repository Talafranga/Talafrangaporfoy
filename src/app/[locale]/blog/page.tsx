import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import BlogPage from './BlogPage';

// Added Edge Runtime declaration for Cloudflare Pages
export const runtime = 'edge';

// Generate static params for build-time rendering
export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  // Properly await params before accessing them
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translation functions
  const t = await getTranslations('Blog');

  // Remove Common namespace reference and use direct string
  const translations = {
    blog: {
      title: t('title'),
      readMore: t('readMore'),
      readTime: t('readTime')
    },
    loading: "Loading..."
  };

  return (
    <BlogPage 
      locale={locale} 
      translations={translations}
    />
  );
} 