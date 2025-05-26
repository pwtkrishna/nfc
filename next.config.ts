import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nfc.aardana.com",
        // pathname: "/**", // Optional: allows all paths
      },
      {
        protocol: "https",
        hostname: "johndoe.com",
        // pathname: "/**", // Optional: allows all paths
      },
    ],
  },
};

export default nextConfig;
