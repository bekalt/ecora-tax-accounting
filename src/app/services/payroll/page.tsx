import ServicePage from "@/components/ServicePage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Payroll Support in the DMV Area | Ecora Tax & Accounting",
  description:
    "Payroll setup and support for small businesses across Maryland, DC, and Northern Virginia. Stay organized and compliant.",
  alternates: {
    canonical: "/services/payroll",
  },
  openGraph: {
    title: "Payroll Support in the DMV Area",
    description:
      "Reliable payroll guidance for small businesses across the DMV area.",
    url: "/services/payroll",
    siteName: site.name,
    type: "website",
  },
};

export default function PayrollPage() {
  return (
    <ServicePage
      title="Payroll"
      subtitle="Run payroll with less stress. We help you set it up correctly, stay organized, and keep employee payments and filings on track."
      bullets={[
        "Payroll setup guidance based on your provider and workflow",
        "Ongoing payroll support (as needed)",
        "Basic payroll reporting and organization",
        "Year-end readiness and coordination",
      ]}
      whoItsFor={[
        "Small businesses hiring their first employees",
        "Owners who want a consistent payroll process",
        "Teams needing cleanup and better organization",
        "Businesses looking to reduce payroll mistakes",
      ]}
      faqs={[
        {
          q: "Do you run payroll for me?",
          a: "We don’t replace your payroll provider, but we help you set things up correctly, stay organized, and handle issues that come up.",
        },
        {
          q: "Which payroll platforms do you support?",
          a: "We commonly work with popular platforms like Gusto, QuickBooks Payroll, and others. We’ll confirm the best workflow during your consult.",
        },
        {
          q: "Can you help if payroll is already messy?",
          a: "Yes. We can help clean up past issues, organize records, and get you back on track.",
        },
      ]}
      primaryCta={{ label: "Request payroll support", href: "/contact#contact" }}
      secondaryCta={{ label: "View all services", href: "/services" }}
    />
  );
}
