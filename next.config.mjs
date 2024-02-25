/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      // Add the new remote pattern for "cdn.pixabay.com" here
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
