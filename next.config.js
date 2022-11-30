/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "images.unsplash.com",
      "i.redd.it",
      "cf.shopee.vn",
    ],
  },
};

module.exports = nextConfig;
