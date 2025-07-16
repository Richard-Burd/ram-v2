/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ram-website-images-and-documents.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.ramtn.org.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default nextConfig;
