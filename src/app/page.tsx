import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Root page redirects to default locale
export default function RootPage() {
  const defaultPath = `/${routing.defaultLocale}`;
  redirect(defaultPath);
}
