/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
  sassOptions: {
    includePaths: ['./src/app/**/*.scss']
  }
};

export default nextConfig;
