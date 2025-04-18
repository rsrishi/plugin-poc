/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => [
      {
        source: '/plugin',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ],
  };

export default nextConfig;
