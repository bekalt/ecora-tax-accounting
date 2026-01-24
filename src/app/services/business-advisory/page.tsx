import ServicePage from "@/components/ServicePage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Business Advisory in the DMV Area | Ecora Tax & Accounting",
  description:
    "Financial advisory services for small businesses across Maryland, DC, and Northern Virginia. Make better decisions with clearer numbers.",
  alternates: {
    canonical: "/services/business-advisory",
  },
  openGraph: {
    title: "Business Advisory in the DMV Area",
    description:
      "Practical financial advisory services for small businesses across the DMV area.",
    url: "/services/business-advisory",
    siteName: site.name,
    type: "website",
  },
};

export default function BusinessAdvisoryPage() {
  return (
    <ServicePage
      title="Business Advisory"
      subtitle="Clear financial guidance to help you make confident decisions. We focus on practical next steps—without overwhelming jargon."
      bullets={[
        "Cash flow and budgeting support",
        "Pricing and profitability insights",
        "Simple reporting that’s easy to understand",
        "Planning for growth and major decisions",
      ]}
      whoItsFor={[
        "Business owners who want clarity and direction",
        "New businesses setting up strong foundations",
        "Growing companies preparing for the next stage",
        "Owners who want proactive guidance year-round",
      ]}
      faqs={[
        {
          q: "Is this only for large businesses?",
          a: "No. Advisory is often most valuable for small businesses that want clearer numbers, better decisions, and a practical plan.",
        },
        {
          q: "What happens in an advisory session?",
          a: "We review your goals, look at your current financial picture, and leave you with clear action steps—what to focus on next and why.",
        },
        {
          q: "Do I need bookkeeping first?",
          a: "Not always, but clean books help. If things are messy, we can recommend a quick cleanup so your decisions are based on accurate information.",
        },
      ]}
      primaryCta={{ label: "Request an advisory consult", href: "/contact#contact" }}
      secondaryCta={{ label: "View all services", href: "/services" }}
    />
  );
}
