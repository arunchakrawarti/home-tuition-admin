/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
};

export default nextConfig;
