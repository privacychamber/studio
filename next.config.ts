import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',       // Static HTML export for Namecheap shared hosting
  basePath: '/studio',    // Essential for GitHub Pages subfolder hosting
  trailingSlash: true,   // Ensures /about -> /about/index.html (Apache friendly)
  transpilePackages: ['tailwind-merge', 'clsx'], // Force CJS resolution for static export
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
