import ServicePage from "@/components/ServicePage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Tax Preparation in the DMV Area | Ecora Tax & Accounting",
  description:
    "CPA-led tax preparation for individuals and small businesses across Maryland, DC, and Northern Virginia. File with confidence and clear guidance.",
  alternates: {
    canonical: "/services/tax-preparation",
  },
  openGraph: {
    title: "Tax Preparation in the DMV Area",
    description:
      "Professional tax preparation services for individuals and small businesses across the DMV area.",
    url: "/services/tax-preparation",
    siteName: site.name,
    type: "website",
  },
};

export default function TaxPreparationPage() {
  return (
    <ServicePage
      title="Tax Preparation"
      subtitle="File with confidence. We prepare and review returns carefully, explain what’s happening, and help you avoid common mistakes."
      bullets={[
        "Individual tax returns (W-2, 1099, deductions/credits)",
        "Small business filings (Schedule C and basic entities)",
        "Year-to-year comparison and error checks",
        "Clear summary of results and next steps",
      ]}
      whoItsFor={[
        "Individuals and families who want peace of mind",
        "Independent contractors and 1099 earners",
        "Small business owners who want clear explanations",
      ]}
      faqs={[
        {
          q: "What do you need from me to get started?",
          a: "After you reach out, we’ll send a short checklist. Most clients provide income documents (W-2/1099), last year’s return, and any deductible expense records.",
        },
        {
          q: "Can you help if I’m behind on filing?",
          a: "Yes. We can help you catch up, prioritize the right years, and map out next steps.",
        },
      ]}
      primaryCta={{ label: "Request a tax prep consult", href: "/contact#contact" }}
    />
  );
}
