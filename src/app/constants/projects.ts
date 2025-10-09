export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  featured: boolean;
  localizations?: {
    [locale: string]: {
      title: string;
      description: string;
    }
  }
}

export const projects: Project[] = [
  {
    id: 'ahmetek',
    title: 'Ahmetek Website',
    description: 'A modern website built with Next.js. With a dual-identity system, it functions both as a portfolio and an e-commerce platform. It features interactive 3D sculpture models using Three.js and React Three Fiber, and provides Turkish-English multilingual support via next-intl. The system includes Sanity CMS for headless content management.',
    image: '/ahmetek/ahmetekfoto.png',
    technologies: ['Next.js', 'TypeScript', 'Sanity'],
    liveDemo: 'https://www.ahmetek.com/',
    featured: true,
    localizations: {
      tr: {
        title: 'Ahmetek Website',
        description: 'Next.js tabanlı modern bir websitedir. Çift kimlik sistemi ile hem portfolyo hem de e-ticaret platformu olarak çalışır. Three.js ve React Three Fiber ile interaktif 3D heykel modelleri sunar, next-intl ile çok dilli destek sağlar. Sanity CMS headless content management sistemi içerir.'
      }
    }
  },
  {
    id: 'avukat',
    title: 'Lawyer Murat Aksu Website',
    description: 'A simple and professional website built with Next.js. Features a blog system, service pages, and contact forms. Includes Sanity CMS for content management and blog posts.',
    image: '/avukat/avukatfoto.png',
    technologies: ['Next.js', 'Sanity'],
    liveDemo: 'https://www.murataksu.av.tr/',
    featured: true,
    localizations: {
      tr: {
        title: 'Avukat Murat Aksu Website',
        description: 'Next.js ile yapılmış basit ve profesyonel bir websitedir. Blog sistemi, hizmet sayfaları ve iletişim formları içerir. Sanity CMS ile içerik yönetimi ve blog yazıları yönetilir.'
      }
    }
  },
  {
    id: 'sencer-film',
    title: 'Sencer Film Production Website',
    description: 'A professional and technological website for a film production company built with Next.js. Features multilingual support, advanced hover animations with 3D card effects, project showcases, and cinematic visual elements. Includes Sanity CMS for content management and dynamic project galleries.',
    image: '/sencer/sencerfoto.png',
    technologies: ['Next.js', 'Sanity'],
    liveDemo: 'https://www.sencerfilm.com/',
    github: 'https://github.com/Talafranga/SencerFilm',
    featured: true,
    localizations: {
      tr: {
        title: 'Sencer Film Yapım Website',
        description: 'Next.js ile yapılmış film yapım şirketi için profesyonel ve teknolojik bir websitedir. Çoklu dil desteği, gelişmiş hover animasyonları ve 3D kart efektleri, proje vitrinleri ve sinematik görsel öğeler içerir. Sanity CMS ile içerik yönetimi ve dinamik proje galerileri sunar.'
      }
    }
  },
  {
    id: 'word-guessing',
    title: 'Word Guessing Game',
    description: 'This project is an interactive web-based game focused on word guessing. It features a user-friendly interface with Turkish words at different difficulty levels.',
    image: '/WordGuessing.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://talafranga.github.io/WordGuessing/',
    github: 'https://github.com/Talafranga/WordGuessing',
    featured: true,
    localizations: {
      tr: {
        title: 'Kelime Tahmin Oyunu',
        description: 'Bu proje, kelime tahmin etmeye dayalı interaktif bir web tabanlı oyundur. Farklı zorluk seviyelerinde Türkçe kelimeler içeren, kullanıcı dostu bir arayüze sahip bir uygulamadır.'
      }
    }
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'A real-time weather forecast application with unit toggle, language support, and dark/light mode.',
    image: '/weather-app.jpg.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://talafranga.github.io/talaWeather/',
    github: 'https://github.com/Talafranga/talaWeather',
    featured: true,
    localizations: {
      tr: {
        title: 'Hava Durumu Uygulaması',
        description: 'Birim değiştirme, dil desteği ve karanlık/aydınlık mod özelliklerine sahip gerçek zamanlı bir hava durumu tahmin uygulaması.'
      }
    }
  }
];

export const getFeaturedProjects = () => {
  // Return only the first 3 projects (Ahmetek, Avukat, Sencer Film)
  return projects.slice(0, 3);
}; 