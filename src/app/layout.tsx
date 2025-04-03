import './globals.css';
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: {
    template: '%s | Talha Kaman',
    default: 'Talha Kaman | Software Developer',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="js-loading">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
