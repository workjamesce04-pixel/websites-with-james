import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GMB } from "@/lib/gmb-data";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${GMB.name} | Web Design & Local SEO — Enfield, London`,
  description:
    "Custom websites and local SEO for UK small businesses. Ex-BCG consultant builds sites that rank on Google and turn visitors into paying customers. Based in Enfield, working UK-wide.",
  keywords: [
    "web design Enfield",
    "website designer London",
    "local SEO UK",
    "small business website",
    "Google Business Profile optimisation",
    "web design near me",
    "affordable web design UK",
  ],
  authors: [{ name: GMB.ownerName }],
  metadataBase: new URL("https://websites-with-james.vercel.app"),
  openGraph: {
    title: `${GMB.name} | Web Design & Local SEO`,
    description: "Custom websites and local SEO for UK small businesses.",
    type: "website",
    locale: "en_GB",
    siteName: GMB.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${GMB.name} | Web Design & Local SEO`,
    description: "Custom websites and local SEO for UK small businesses.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: GMB.name,
  description: "Professional web design and local SEO for small businesses across the UK.",
  telephone: GMB.phoneTel,
  email: GMB.email,
  url: "https://websites-with-james.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: GMB.address.street,
    addressLocality: GMB.address.city,
    postalCode: GMB.address.postcode,
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: GMB.geo.lat, longitude: GMB.geo.lng },
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GMB.rating,
    reviewCount: GMB.reviewCount,
    bestRating: 5,
  },
  priceRange: "££",
  areaServed: "United Kingdom",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
