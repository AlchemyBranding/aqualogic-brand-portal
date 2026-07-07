/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ]
  },
  // Keep the photography folder out of every serverless-function bundle.
  // Files under /public are served statically anyway; without this Next's
  // file tracer follows fs.readdirSync in lib/assets.ts and pulls all
  // 200MB+ of photography into every route bundle, blowing past Vercel's
  // 250MB per-function limit.
  outputFileTracingExcludes: {
    '*': [
      'public/assets/aqualogic/photography/**/*',
      'public/assets/aqualogic/headshots/**/*',
      'public/assets/sustec/photography/**/*'
    ]
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'public/assets/aqualogic/photography/**/*',
        'public/assets/aqualogic/headshots/**/*',
        'public/assets/sustec/photography/**/*'
      ]
    }
  }
};

module.exports = nextConfig;
