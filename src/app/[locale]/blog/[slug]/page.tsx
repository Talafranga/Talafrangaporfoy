import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { blogPosts } from '@/app/constants/blogPosts';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '@/app/components/OptimizedImage';
import Header from '@/app/components/Header';
import { Metadata } from 'next';

// Generate static params for build-time rendering of all blog posts
export function generateStaticParams() {
  return blogPosts.flatMap(post => {
    return routing.locales.map(locale => ({ 
      locale, 
      slug: post.id 
    }));
  });
}

// Export metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string, locale: string } }): Promise<Metadata> {
  const { slug, locale } = params;
  
  const post = blogPosts.find(post => post.id === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  // Get localized title and excerpt if available
  const localizedTitle = post.localizations?.[locale]?.title || post.title;
  const localizedExcerpt = post.localizations?.[locale]?.excerpt || post.excerpt;
  
  return {
    title: `${localizedTitle} | Blog`,
    description: localizedExcerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string, locale: string } }) {
  const { slug, locale } = params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.id === slug);
  
  // If post not found, return 404
  if (!post) {
    return notFound();
  }
  
  // Get localized content if available
  const localizedTitle = post.localizations?.[locale]?.title || post.title;
  const localizedContent = post.localizations?.[locale]?.content || post.content;
  const localizedDate = post.localizations?.[locale]?.date || post.date;
  const localizedCategory = post.localizations?.[locale]?.category || post.category;
  
  // Get translation function
  const t = await getTranslations('Blog');
  
  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-24 pt-32">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {localizedTitle}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span>{localizedDate}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span>{post.readTime} {t('readTime')}</span>
            </div>
            <div className="flex items-center">
              <TagIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span>{localizedCategory}</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden mb-12">
          <OptimizedImage
            src={post.coverImage}
            alt={localizedTitle}
            width={1200}
            height={630}
            objectFit="cover"
            className="w-full aspect-video object-cover"
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none prose-blue dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(localizedContent) }}
        />
      </article>
    </main>
  );
}

// Helper function to convert markdown to HTML
function markdownToHtml(markdown: string): string {
  // Simple markdown to HTML conversion
  return markdown
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-4 pb-2 pt-8 mt-8 border-b border-blue-500/30 text-blue-400">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-3 pt-6 mt-6 text-blue-400">$1</h3>')
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    .replace(/\> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-500/10 rounded-r-lg italic text-blue-400">$1</blockquote>')
    .replace(/```([\s\S]*?)```/gm, (match, p1) => `<pre class="bg-gray-800/80 p-4 rounded-lg font-mono text-sm overflow-x-auto my-6"><code>${p1}</code></pre>`)
    .replace(/- (.*$)/gm, '<li class="flex items-start"><span class="text-blue-400 mr-2">•</span><span>$1</span></li>')
    .replace(/<li>(.*)<\/li>/gm, '<ul class="space-y-2 my-6">$&</ul>')
    .split('\n\n').join('<p class="mb-4"></p>');
} 