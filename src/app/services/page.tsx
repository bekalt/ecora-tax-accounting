import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CPA Services in the DMV Area | Ecora Tax & Accounting",
  description:
    "Explore tax preparation, bookkeeping, payroll, tax planning, and business advisory services for individuals and small businesses across Maryland, DC, and Northern Virginia.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "CPA Services in the DMV Area",
    description:
      "Professional tax and accounting services for individuals and small businesses across the DMV area.",
    url: "/services",
    siteName: site.name,
    type: "website",
  },
};

const services = [
  {
    title: "Tax Preparation",
    desc: "Accurate filing for individuals and small businesses—done on time, with clear guidance.",
    href: "/services/tax-preparation",
  },
  {
    title: "Bookkeeping",
    desc: "Clean, consistent books so you always know where your business stands.",
    href: "/services/bookkeeping",
  },
  {
    title: "Tax Planning",
    desc: "Proactive strategies to reduce surprises and plan ahead.",
    href: "/services/tax-planning",
  },
  {
    title: "Payroll",
    desc: "Payroll support to keep your team paid and your records organized.",
    href: "/services/payroll",
  },
  {
    title: "Business Advisory",
    desc: "Clear guidance for growth, cash flow, and better decisions.",
    href: "/services/business-advisory",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Choose the support you need. Each service is tailored to your situation and explained in
        clear, practical language.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-2xl border bg-white px-6 py-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-lg font-semibold text-slate-900 group-hover:text-sky-800">
              {s.title}
            </div>
            <div className="mt-2 text-sm text-slate-600">{s.desc}</div>
            <div className="mt-4 text-sm font-medium text-sky-700">
              Learn more →
            </div>
          </Link>
        ))}
      </div>

      {/* Trust / CTA band */}
      <div className="mt-12 rounded-2xl border bg-slate-50 p-6 sm:p-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-base font-semibold text-slate-900">
            Not sure which service you need?
          </div>
          <p className="mt-1 text-sm text-slate-600">
            Tell us what’s going on and we’ll recommend the right next step.
            Typical response within 1 business day.
          </p>
        </div>

        <Link
          href="/contact#contact"
          className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800"
        >
          Request a consultation
        </Link>
      </div>
    </main>
  );
}
