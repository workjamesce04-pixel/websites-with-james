import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GMB } from "@/lib/gmb-data";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${GMB.name} | Web Design & Local SEO Enfield, London`,
  description:
    "Professional web design and local SEO for small businesses across the UK. Custom sites, compelling copy, and Google rankings that drive real enquiries.",
  keywords: [
    "web design Enfield",
    "website designer London",
    "local SEO UK",
    "small business website",
    "Google Business Profile",
    "web design near me",
    "affordable web design",
  ],
  authors: [{ name: GMB.ownerName }],
  openGraph: {
    title: `${GMB.name} | Web Design & Local SEO`,
    description:
      "Custom websites and local SEO for UK small businesses. Get found on Google and turn visitors into customers.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: GMB.name,
  description: GMB.ownerBio,
  telephone: GMB.phoneTel,
  email: GMB.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: GMB.address.street,
    addressLocality: GMB.address.city,
    postalCode: GMB.address.postcode,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GMB.geo.lat,
    longitude: GMB.geo.lng,
  },
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
