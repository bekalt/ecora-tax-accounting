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

        <main className="flex-1">{children}</main>

      {/* FOOTER */}
<footer className="border-t bg-white">
  <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-500 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      © {new Date().getFullYear()} {site.name}. All rights reserved.
    </div>

    <div className="flex flex-wrap items-center gap-4">
      <Link href="/privacy" className="hover:text-sky-700">
        Privacy Policy
      </Link>
      <Link href="/contact" className="hover:text-sky-700">
        Contact
      </Link>

      {/* Social links (optional) */}
      {site.social?.linkedin && (
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-700"
        >
          LinkedIn
        </a>
      )}

      {site.social?.facebook && (
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-700"
        >
          Facebook
        </a>
      )}

      {site.social?.twitter && (
        <a
          href={site.social.twitter}
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-700"
        >
          X
        </a>
      )}
      {site.address?.street && (
  <div className="text-slate-600">
    {site.address.street}
    {site.address.city ? `, ${site.address.city}` : ""}
    {site.address.state ? `, ${site.address.state}` : ""}{" "}
    {site.address.zip}
  </div>
)}
{/* Phone (optional) */}
{site.phoneDisplay && site.phoneTel ? (
  <div className="text-slate-600">
    <span className="font-medium">Tel:</span>{" "}
    <a
      href={`tel:${site.phoneTel}`}
      className="hover:text-sky-700"
    >
      {site.phoneDisplay}
    </a>
  </div>
) : null}

    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
