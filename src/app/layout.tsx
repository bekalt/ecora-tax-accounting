import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
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
    title: "Ecora Tax & Accounting | CPA Services in the DMV Area",
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

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-sky-700">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-sky-700">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
