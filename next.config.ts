import type { NextConfig } from "next";
import withMDX from "@next/mdx";

// Configure the MDX plugin
const withMDXConfig = withMDX({
  extension: /\.mdx?$/, // Support both .md and .mdx files
});

// Define your Next.js configuration
const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add the domain here
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // Add MDX to the page extensions
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

// Apply the MDX plugin to the Next.js configuration
export default withMDXConfig(nextConfig);