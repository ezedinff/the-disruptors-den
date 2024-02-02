/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
      images: {
        domains: [
          'cdn.builder.io',
          'localhost',
        ],
        unoptimized: true,
        dangerouslyAllowSVG: true,
      }
};

module.exports = nextConfig;
