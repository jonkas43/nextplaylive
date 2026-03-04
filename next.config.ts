import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**",
      },
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        pathname: "/i/teamlogos/**",
      },
      {
        protocol: "https",
        hostname: "loodibee.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;