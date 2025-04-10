import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ProjectsPage from './ProjectsPage';
import { routing } from '@/i18n/routing';

// Added Edge Runtime declaration for Cloudflare Pages
export const runtime = 'edge';

// Allow dynamic locale params
export const dynamicParams = true;

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  // Properly await params before accessing them
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
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