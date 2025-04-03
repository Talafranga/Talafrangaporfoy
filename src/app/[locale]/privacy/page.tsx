import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import PrivacyPage from './PrivacyPage';

// Generate static params for build-time rendering
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Privacy({ params }: { params: { locale: string } }) {
  // Use params directly
  const locale = params.locale;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <PrivacyPage 
      locale={locale} 
    />
  );
} 