import { site } from "@/lib/site";

export default function JsonLd() {
  const baseUrl = `https://${site.domain}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${baseUrl}/#business`,
    name: site.name,
    description:
      "CPA-led tax preparation, bookkeeping, payroll, tax planning, and business advisory services for individuals and small businesses across the DMV area.",
    url: baseUrl,
    telephone: site.phoneTel,
    email: site.email,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Maryland" },
      { "@type": "AdministrativeArea", name: "Washington, DC" },
      { "@type": "AdministrativeArea", name: "Northern Virginia" },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "MD",
      addressCountry: "US",
    },
    sameAs: [
      site.social?.linkedin || "",
      site.social?.facebook || "",
      site.social?.twitter || "",
    ].filter(Boolean),
    serviceOffered: [
      { "@type": "Service", name: "Tax Preparation", areaServed: "DMV Area" },
      { "@type": "Service", name: "Bookkeeping", areaServed: "DMV Area" },
      { "@type": "Service", name: "Tax Planning", areaServed: "DMV Area" },
      { "@type": "Service", name: "Payroll Support", areaServed: "DMV Area" },
      { "@type": "Service", name: "Business Advisory", areaServed: "DMV Area" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
