import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import PrivacyPage from './PrivacyPage';

// Added Edge Runtime declaration for Cloudflare Pages
export const runtime = 'edge';

// Generate static params for build-time rendering
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  // Resolve params properly
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <PrivacyPage 
      locale={locale} 
    />
  );
} 