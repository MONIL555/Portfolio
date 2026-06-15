/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    // Tree-shake framer-motion to only include used exports
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
