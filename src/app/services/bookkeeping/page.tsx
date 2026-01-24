import ServicePage from "@/components/ServicePage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Bookkeeping Services in the DMV Area | Ecora Tax & Accounting",
  description:
    "Monthly bookkeeping and cleanup services for small businesses across Maryland, DC, and Northern Virginia. Stay organized and tax-ready.",
  alternates: {
    canonical: "/services/bookkeeping",
  },
  openGraph: {
    title: "Bookkeeping Services in the DMV Area",
    description:
      "Reliable bookkeeping support for small businesses across the DMV area.",
    url: "/services/bookkeeping",
    siteName: site.name,
    type: "website",
  },
};

export default function BookkeepingPage() {
  return (
    <ServicePage
      title="Bookkeeping"
      subtitle="Clean books make better decisions. We keep your records organized, reconciled, and ready—so you always know where things stand."
      bullets={[
        "Monthly categorization and reconciliation",
        "Clear reports (profit & loss, balance sheet summary)",
        "Cleanup/catch-up bookkeeping if you’re behind",
        "Year-end readiness for tax preparation",
      ]}
      whoItsFor={[
        "Small business owners who want clarity and consistency",
        "Busy operators who don’t want bookkeeping stress",
        "New businesses building a solid financial foundation",
        "Anyone needing cleanup before tax season",
      ]}
      faqs={[
        {
          q: "What do you need from me each month?",
          a: "Typically: bank/credit card access or statements, your bookkeeping platform login (if applicable), and notes on any unusual transactions. We’ll provide a simple checklist.",
        },
        {
          q: "Can you clean up past months?",
          a: "Yes. If you’re behind, we can do catch-up bookkeeping and get you current before moving into ongoing support.",
        },
        {
          q: "Do you work with QuickBooks?",
          a: "Yes—many clients use QuickBooks. If you’re using another system, we’ll confirm the best workflow during your consult.",
        },
      ]}
      primaryCta={{ label: "Request bookkeeping support", href: "/contact#contact" }}
    />
  );
}
