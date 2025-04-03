import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ProjectsPage from './ProjectsPage';
import { routing } from '@/i18n/routing';

// Generate static params for build-time rendering
export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function Projects({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translation functions
  const projectsT = await getTranslations('Projects');
  
  // Prepare serializable translations object with only the required fields
  const translations = {
    projects: {
      title: projectsT('title'),
      viewLiveDemo: projectsT('viewLiveDemo'),
      liveDemo: projectsT('liveDemo'),
      github: projectsT('github')
    },
    loading: "Loading..." // Use direct text instead of common namespace
  };

  return (
    <ProjectsPage 
      locale={locale} 
      translations={translations}
    />
  );
} 