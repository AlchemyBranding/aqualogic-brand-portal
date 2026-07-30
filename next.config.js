// NOT applied to /studio (see the second headers() entry below) — Sanity
// Studio v5 loads a cross-origin auth "Core" bridge script from
// https://core.sanity-cdn.com that script-src 'self' silently blocks,
// hanging Studio on its loading spinner forever (confirmed live on the
// sibling digeo-collective project, same Sanity Studio v5 setup). Rather
// than chase Sanity's shifting internal allowlist, Studio gets the
// baseline security headers only, no CSP.
const csp =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://cdn.sanity.io; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests";

const baselineSecurityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

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
  },
  async headers() {
    return [
      {
        // Everything except /studio and its sub-paths.
        source: '/:path((?!studio).*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          ...baselineSecurityHeaders
        ]
      },
      {
        // Sanity Studio: baseline headers only, no CSP — see note above.
        source: '/studio/:path*',
        headers: baselineSecurityHeaders
      }
    ];
  }
};

module.exports = nextConfig;
