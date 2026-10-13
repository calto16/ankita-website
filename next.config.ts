import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // The story (public/story.html) is the home page.
      // The original site now lives at /classic.
      beforeFiles: [
        { source: "/", destination: "/story.html" },
        { source: "/story", destination: "/story.html" },
      ],
    };
  },
};

export default nextConfig;
