import ServicePage from "@/components/ServicePage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Tax Planning Services in the DMV Area | Ecora Tax & Accounting",
  description:
    "Proactive tax planning for individuals and business owners across Maryland, DC, and Northern Virginia. Reduce surprises and plan ahead.",
  alternates: {
    canonical: "/services/tax-planning",
  },
  openGraph: {
    title: "Tax Planning Services in the DMV Area",
    description:
      "Strategic tax planning for individuals and business owners across the DMV area.",
    url: "/services/tax-planning",
    siteName: site.name,
    type: "website",
  },
};

export default function TaxPlanningPage() {
  return (
    <ServicePage
      title="Tax Planning"
      subtitle="Don’t wait until filing season. Tax planning helps you reduce surprises, stay ahead of quarterly payments, and make confident decisions year-round."
      bullets={[
        "Estimate taxes and plan quarterly payments",
        "Identify deduction and timing opportunities",
        "High-level strategy guidance for small businesses (as applicable)",
        "Year-end review with a clear action checklist",
      ]}
      whoItsFor={[
        "Self-employed and 1099 earners",
        "Growing businesses with changing income",
        "Clients who want proactive guidance—not last-minute scrambling",
        "Anyone tired of surprise tax bills",
      ]}
      faqs={[
        {
          q: "When should I do tax planning?",
          a: "Any time is helpful, but most clients benefit from a mid-year check-in and a year-end review so there’s still time to take action.",
        },
        {
          q: "Is tax planning different from tax preparation?",
          a: "Yes. Preparation looks backward to file accurately. Planning looks ahead to reduce surprises and help you make smarter decisions before deadlines.",
        },
        {
          q: "Do you help with quarterly estimates?",
          a: "Yes. We can estimate payments, explain what’s driving the numbers, and help you build a simple plan to stay on track.",
        },
      ]}
      primaryCta={{ label: "Request a tax planning consult", href: "/contact#contact" }}
      secondaryCta={{ label: "View all services", href: "/services" }}
    />
  );
}
