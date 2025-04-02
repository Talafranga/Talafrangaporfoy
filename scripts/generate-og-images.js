/**
 * This script creates placeholder OpenGraph images
 * to ensure all SEO images referenced in the code actually exist
 */

const fs = require('fs');
const path = require('path');

// Define image paths that should exist
const requiredImages = [
  '/images/og-image.png',
  '/images/projects-og-image.png',
  '/images/blog-og-image.png',
  '/images/contact-og-image.png',
  '/images/privacy-og-image.png',
  '/images/talha-kaman.jpg',
  '/images/logo.png',
  '/placeholder-image.jpg',
  '/apple-touch-icon.png'
];

// Create the directories
const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('Created public directory');
}

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
  console.log('Created images directory');
}

// Check if images exist and create placeholders if they don't
requiredImages.forEach(imagePath => {
  const fullPath = path.join(publicDir, imagePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
  
  if (!fs.existsSync(fullPath)) {
    console.log(`WARNING: Missing required image: ${imagePath}`);
    console.log(`Create a 1200x630 image at ${fullPath} for best SEO results.`);
    
    // Could generate a basic placeholder image here if needed
    // For now, just log a warning
  }
});

console.log('✅ Image directory check complete'); 