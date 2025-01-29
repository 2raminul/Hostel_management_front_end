/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      FRONTEND_EXPOSED_URL_PREFIX: process.env.FRONTEND_EXPOSED_URL_PREFIX,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

export default nextConfig;
