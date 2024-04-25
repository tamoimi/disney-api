/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["rickandmortyapi.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
