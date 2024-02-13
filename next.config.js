/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
