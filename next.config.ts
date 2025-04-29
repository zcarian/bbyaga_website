import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bbyaga-photos.s3.eu-north-1.amazonaws.com",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
