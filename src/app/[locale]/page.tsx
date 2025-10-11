import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import HomePage from './HomePage';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

// Allow dynamic locale params
export const dynamicParams = true;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // Properly await params before accessing them
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translation functions
  const homeT = await getTranslations('HomePage');
  const aboutT = await getTranslations('About');
  const projectsT = await getTranslations('Projects');
  const blogT = await getTranslations('Blog');

  // Prepare serializable translations object
  const translations = {
    homePage: {
      title: homeT('title'),
      jobTitle: homeT('jobTitle'),
      projects: homeT('projects'),
      contact: homeT('contact'),
      viewProjects: homeT('viewProjects'),
      viewPosts: homeT('viewPosts')
    },
    about: {
      title: aboutT('title'),
      description: aboutT('description')
    },
    projects: {
      title: projectsT('title'),
      viewProject: projectsT('viewProject'),
      viewLiveDemo: projectsT('viewLiveDemo'),
      liveDemo: projectsT('liveDemo'),
      github: projectsT('github')
    },
    blog: {
      title: blogT('title'),
      readMore: blogT('readMore'),
      readTime: blogT('readTime')
    }
  };

  return (
    <HomePage 
      locale={locale} 
      translations={translations}
    />
  );
} 