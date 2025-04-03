import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ContactPage from './ContactPage';

// Generate static params for build-time rendering
export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function Contact({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translation functions
  const contactT = await getTranslations('Contact');
  
  // Prepare serializable translations object
  const translations = {
    contact: {
      title: contactT('title'),
      subtitle: contactT('subtitle'),
      description: contactT('description'),
      name: contactT('name'),
      email: contactT('email'),
      message: contactT('message'),
      send: contactT('send'),
      phone: contactT('phone'),
      subject: contactT('subject'),
      getInTouch: contactT('getInTouch'),
      emailLabel: contactT('emailLabel'),
      location: contactT('location'),
      followMe: contactT('followMe'),
      success: contactT('success'),
      error: contactT('error'),
      sending: contactT('sending')
    },
    loading: "Loading..." // Use direct text instead of common namespace
  };

  return (
    <ContactPage 
      locale={locale} 
      translations={translations}
    />
  );
} 