import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [new URL("https://images2.imgbox.com/**")]
  }
};

export default nextConfig;
