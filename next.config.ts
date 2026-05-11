import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/khinkali-yard",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
