export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
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
  return projects.filter(project => project.featured);
}; 