import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    serverActions: {
      // Sale agreements are uploaded through the contact form (10 MB cap, plus multipart overhead).
      bodySizeLimit: "11mb",
    },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
