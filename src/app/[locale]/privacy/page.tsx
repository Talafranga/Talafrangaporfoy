import { setRequestLocale } from 'next-intl/server';
import PrivacyPage from './PrivacyPage';

// Added Edge Runtime declaration for Cloudflare Pages
export const runtime = 'edge';

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