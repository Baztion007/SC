import type { Metadata } from "next";
import { Inter, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.sprucerva.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spruce Construction | Custom Homebuilder in Richmond & Northern Neck, VA",
    template: "%s | Spruce Construction",
  },
  description:
    "Spruce Construction is a custom residential homebuilder in Richmond and Virginia's Northern Neck, specializing in bespoke, built-to-last new builds and whole-home renovations defined by craftsmanship and excellence.",
  keywords: [
    "custom homebuilder Richmond VA",
    "whole-home renovation Richmond",
    "new home construction Virginia",
    "Northern Neck homebuilder",
    "luxury home renovation Richmond",
    "Spruce Construction",
    "custom home builder Manakin Sabot",
  ],
  authors: [{ name: "Spruce Construction" }],
  creator: "Spruce Construction",
  publisher: "Spruce Construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spruce Construction | Custom Homebuilder in Richmond & Northern Neck, VA",
    description:
      "Specializing in bespoke, built-to-last new builds and whole-home renovations, defined by professionalism, craftsmanship, and excellence at every step.",
    url: siteUrl,
    siteName: "Spruce Construction",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1440,
        height: 720,
        alt: "Custom luxury home built by Spruce Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spruce Construction | Custom Homebuilder in Richmond & Northern Neck, VA",
    description:
      "Specializing in bespoke, built-to-last new builds and whole-home renovations.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org LocalBusiness structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: "Spruce Construction",
              description:
                "Custom residential homebuilder in Richmond and Virginia's Northern Neck, specializing in bespoke new builds and whole-home renovations.",
              url: siteUrl,
              telephone: "",
              email: "carey@sprucerva.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "526 N. Arthur Ashe Blvd.",
                addressLocality: "Richmond",
                addressRegion: "VA",
                postalCode: "23220",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Richmond" },
                { "@type": "AdministrativeArea", name: "Northern Neck" },
                { "@type": "City", name: "Manakin Sabot" },
              ],
              sameAs: ["https://www.instagram.com/spruce_rva"],
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
