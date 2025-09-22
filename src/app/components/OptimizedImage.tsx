'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  objectPosition = 'center',
  onClick,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleError = () => {
    setImageError(true);
  };

  // Handle external URLs
  const isExternal = src.startsWith('http') || src.startsWith('https');
  
  // Fallback image for errors
  const fallbackImage = '/placeholder-image.jpg';

  if (!isMounted) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
      />
    );
  }

  // If src is external or there's an error, use the regular img tag
  if (isExternal || imageError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageError ? fallbackImage : src}
        alt={alt}
        className={className}
        style={{ 
          objectFit, 
          objectPosition,
          width: width || '100%', 
          height: height || 'auto'
        }}
        onError={handleError}
        onClick={onClick}
      />
    );
  }

  // Otherwise use Next.js Image component for optimization
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      style={{ 
        objectFit, 
        objectPosition
      }}
      onError={handleError}
      onClick={onClick}
    />
  );
} 