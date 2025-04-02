/**
 * This script helps generate blog post scaffolding
 * Usage: node scripts/create-blog-post.js "My Blog Post Title"
 */

const fs = require('fs');
const path = require('path');

// Get the blog post title from command line arguments
const blogTitle = process.argv[2];

if (!blogTitle) {
  console.error('Please provide a blog post title as an argument');
  console.log('Example: node scripts/create-blog-post.js "My Blog Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = blogTitle
  .toLowerCase()
  .replace(/[^\w\s]/g, '')
  .replace(/\s+/g, '-');

// Get current date in the format "Month Day, Year"
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// Create the blog post object
const blogPost = {
  id: slug,
  slug: slug,
  title: blogTitle,
  excerpt: "Write a compelling excerpt here that summarizes the blog post.",
  content: `## Introduction
Write your introduction here.

## Main Section
Write your main content here.

### Subsection
Additional content here.

## Conclusion
Wrap up your blog post here.
`,
  date: currentDate,
  readTime: "5",
  category: "Development",
  image: `/blog/${slug}.png`,
  coverImage: `/blog/${slug}.png`
};

// Check if constants/blogPosts.ts file exists
const blogPostsFilePath = path.join(process.cwd(), 'src', 'app', 'constants', 'blogPosts.ts');

if (!fs.existsSync(blogPostsFilePath)) {
  console.error('Blog posts file not found:', blogPostsFilePath);
  process.exit(1);
}

// Read the existing blog posts file
let blogPostsContent = fs.readFileSync(blogPostsFilePath, 'utf8');

// Find the blogPosts array in the file
const blogPostsArrayStart = blogPostsContent.indexOf('export const blogPosts: BlogPost[] = [');
const blogPostsArrayEnd = blogPostsContent.lastIndexOf('];');

if (blogPostsArrayStart === -1 || blogPostsArrayEnd === -1) {
  console.error('Could not find blogPosts array in the file');
  process.exit(1);
}

// Get the existing blog posts array content
const existingBlogPostsArray = blogPostsContent.substring(blogPostsArrayStart + 'export const blogPosts: BlogPost[] = ['.length, blogPostsArrayEnd);

// Create the new blog post entry
const newBlogPostEntry = `  {
    id: "${blogPost.id}",
    slug: "${blogPost.slug}",
    title: "${blogPost.title}",
    excerpt: "${blogPost.excerpt}",
    content: \`${blogPost.content}\`,
    date: "${blogPost.date}",
    readTime: "${blogPost.readTime}",
    category: "${blogPost.category}",
    image: "${blogPost.image}",
    coverImage: "${blogPost.coverImage}"
  },`;

// Add the new blog post at the beginning of the array
const updatedBlogPostsArray = newBlogPostEntry + existingBlogPostsArray;

// Update the blog posts file
const updatedBlogPostsContent = blogPostsContent.substring(0, blogPostsArrayStart + 'export const blogPosts: BlogPost[] = ['.length) +
  updatedBlogPostsArray +
  blogPostsContent.substring(blogPostsArrayEnd);

fs.writeFileSync(blogPostsFilePath, updatedBlogPostsContent);

console.log(`✅ Blog post "${blogTitle}" created with slug "${slug}"`);
console.log(`ℹ️ Don't forget to create the blog image at public${blogPost.image}`);
console.log(`ℹ️ Edit the blog post in src/app/constants/blogPosts.ts`); 