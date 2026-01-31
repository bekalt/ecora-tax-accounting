import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import type { Viewport } from "next";

const SITE_URL = `https://${site.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ecora Tax & Accounting | CPA Services in the DMV Area",
    template: "%s | Ecora Tax & Accounting",
  },
  description:
    "CPA-led tax preparation, bookkeeping, payroll, and advisory services for individuals and small businesses across Maryland, DC, and Northern Virginia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ecora Tax & Business Consulting LLC | CPA Firm",
    description:
      "Trusted CPA services for individuals and small businesses across Maryland, DC, and Northern Virginia.",
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecora Tax & Accounting",
    description:
      "CPA-led tax, bookkeeping, and advisory services across Maryland, DC, and Northern Virginia.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <JsonLd />
        <Header />


{/* Experience banner */}
<div className="bg-slate-100 border-b border-slate-200">
  <p className="max-w-7xl mx-auto px-4 py-2 text-center text-sm text-slate-700">
    Backed by over <span className="font-semibold">15 years of CPA experience</span> delivering reliable tax and accounting solutions.
  </p>
</div>

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Portal root used by Header mobile menu */}
        <div id="portal-root" />
      </body>
    </html>
  );
}
