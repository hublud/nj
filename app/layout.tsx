import type { Metadata } from "next";
import "./globals.css";
import { TopAdBanner } from "@/components/ads/TopAdBanner";
import { Header } from "@/components/layout/Header";
import { IconCategoryNav } from "@/components/navigation/IconCategoryNav";
import { SecondaryCategoryNav } from "@/components/navigation/SecondaryCategoryNav";
import { WhatsAppServicesBanner } from "@/components/navigation/WhatsAppServicesBanner";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "The Logion Journal",
    "Logion Thinks",
    "Logion Wealth",
    "Logion Creative",
    "Logion Living",
    "Logion Relations",
    "The Logion Paradox",
    "Logion Spirit",
    "Logion Career",
    "Logion Culture",
    "Logion Unfiltered",
    "Logion Coaching",
    "Ideas and perspectives",
    "Intellectual conversations",
    "African youth culture",
    "Philosophy and critical thinking",
    "Freelancing and remote work",
    "Spoken word and poetry",
    "Personal growth and mentorship",
  ],
  authors: [{ name: "The Logion Journal Editorial Team", url: siteConfig.url }],
  creator: "The Logion Journal",
  publisher: "The Logion Journal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@logionjournal",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "lifestyle & thought leadership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-400 selection:text-blue-950"
        suppressHydrationWarning
      >
        {/* Top Sponsored Ad Banner */}
        <TopAdBanner />

        {/* Brand Header with Category Dropdowns */}
        <Header />

        {/* 12 Categories Icon Navigation */}
        <IconCategoryNav />

        {/* Secondary Pipe Highlights Navigation */}
        <SecondaryCategoryNav />

        {/* WhatsApp Services & Editorial Desk Action Banner */}
        <WhatsAppServicesBanner />

        {/* Page Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
