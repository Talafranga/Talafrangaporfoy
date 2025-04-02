import type { Metadata } from "next";
import { blogPosts } from "../../constants/blogPosts";
import { siteConfig } from "../../config/siteConfig";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the blog post by id
  const post = blogPosts.find((post) => post.id === params.id);

  // Fallback if post is not found
  if (!post) {
    return {
      title: `Blog Post Not Found | ${siteConfig.author.name}`,
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: `${post.title} | ${siteConfig.author.name} Blog`,
    description: post.excerpt || post.title,
    keywords: [post.category, "web development", "frontend", "blog", siteConfig.author.name.toLowerCase()],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `${siteConfig.url}/blog/${post.id}`,
      siteName: siteConfig.name,
      images: [
        {
          url: post.image || siteConfig.images.blogOgImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.author.name],
      tags: [post.category, "web development", "frontend"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image || siteConfig.images.blogOgImage],
    },
  };
} 