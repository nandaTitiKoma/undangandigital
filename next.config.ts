import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - added to suppress cross-origin warnings on local network testing
  allowedDevOrigins: ['192.168.1.10'],
};

export default nextConfig;
