import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ContactPage from './ContactPage';

// Added Edge Runtime declaration for Cloudflare Pages
export const runtime = 'edge';

// Allow dynamic locale params
export const dynamicParams = true;

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  // Properly await params before accessing them
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
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
      translations={translations}
    />
  );
} 