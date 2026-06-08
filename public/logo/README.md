# Websites with James — Logo Pack

Brand colours
- Primary blue: #0066CC
- Accent (cursor dot / dark-bg text): #7FB2EE
- Deep blue (reversed icon bg): #003D7A
- Text dark: #111111  ·  Muted: #555555

## Contents

### /svg  (vector — scale to any size, use these wherever possible)
- logo-primary.svg / -white.svg     Stacked icon + wordmark (white = for dark backgrounds)
- logo-navbar.svg / -white.svg      Horizontal lockup for header bars
- icon-color.svg                    Standalone app/icon mark
- icon-mono-dark.svg                Single-colour black (light backgrounds)
- icon-mono-white.svg               Single-colour white (dark backgrounds)
- icon-reversed.svg                 White mark on deep-blue tile

### /favicon  (drop straight into a Next.js /public folder)
- favicon.ico                       16/32/48 multi-res
- favicon-16x16.png, -32x32.png, -48x48.png
- apple-touch-icon.png              180x180
- android-chrome-192x192.png, -512x512.png
- site.webmanifest

### /png  (raster exports, transparent background)
- All logo + icon variants at high resolution

## Next.js setup
Place the /favicon contents in /public, then in app/layout.tsx the App Router
picks up favicon.ico, apple-touch-icon.png and the manifest automatically if you
name them in /app, or reference them explicitly:

  export const metadata = {
    icons: {
      icon: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    themeColor: '#0066CC',
  }

For the navbar, import the SVG directly:
  import Logo from '@/public/logo-navbar.svg'   // with @svgr/webpack
or use next/image:
  <Image src="/logo-navbar.svg" alt="Websites with James" width={320} height={60} priority />
