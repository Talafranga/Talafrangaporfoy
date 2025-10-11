import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import BlogPage from './BlogPage';

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

// Allow dynamic locale params
export const dynamicParams = true;

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  // Await params before accessing
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translations
  const t = await getTranslations('Blog');
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