/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.firstbanknigeria.com',
          },
        ],
      },
};

export default nextConfig;
