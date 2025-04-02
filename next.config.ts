import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint hatalarını build sırasında görmezden gelmek için
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
