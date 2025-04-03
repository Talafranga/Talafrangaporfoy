import { 
  HomeIcon,
  BookOpenIcon,
  FolderIcon,
  ShieldCheckIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

// Dynamic paths for proper i18n navigation
export const navigationItems = [
  { href: '/', label: 'Home', key: 'home', icon: HomeIcon },
  { href: '/blog', label: 'Blog', key: 'blog', icon: BookOpenIcon },
  { href: '/projects', label: 'Projects', key: 'projects', icon: FolderIcon },
  { href: '/privacy', label: 'Privacy', key: 'privacy', icon: ShieldCheckIcon },
  { href: '/contact', label: 'Contact', key: 'contact', icon: EnvelopeIcon }
]; 