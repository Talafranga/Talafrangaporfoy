import { setRequestLocale } from 'next-intl/server';
import PrivacyPage from './PrivacyPage';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

// Allow dynamic locale params
export const dynamicParams = true;

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  // Resolve params properly
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <PrivacyPage />
  );
} 