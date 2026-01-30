import { taxUpdates } from "@/lib/taxUpdates";
import HeroParallax from "@/components/HeroParallax";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Ecora Tax & Business Consulting LLC | CPA Services in the DMV Area",
  description:
    "CPA-led tax preparation, bookkeeping, payroll, and advisory services for individuals and small businesses across Maryland, DC, and Northern Virginia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ecora Tax & Business Consulting LLC | CPA Services in the DMV Area",
    description:
      "Trusted CPA services for individuals and small businesses in Maryland, DC, and Northern Virginia.",
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecora Tax & Business Consulting LLC",
    description:
      "CPA-led tax, bookkeeping, and advisory services across Maryland, DC, and Northern Virginia.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <HeroParallax />

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                What we do
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
                Services tailored to individuals & small businesses
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
                Clear guidance, accurate reporting, and proactive support—so you can
                stay compliant and focus on what matters.
              </p>
            </div>
            </div>

            {/* Mobile-only button (hidden on desktop) */}
           {/* Mobile-only button (hidden on md+ screens) */}
<div className="mt-2 sm:mt-0 block md:hidden">
  <Link
    href="/services"
    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
  >
    View all services →
  </Link>
</div>

          

          {/* Mobile-only service cards */}
          <div className="mt-8 grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] md:hidden">
            {[
              {
                title: "Tax Preparation",
                desc: "Accurate filings for individuals and businesses—done on time, with clarity.",
                href: "/services/tax-preparation",
              },
              {
                title: "Bookkeeping",
                desc: "Clean, organized books and monthly support to keep your finances on track.",
                href: "/services/bookkeeping",
              },
              {
                title: "Tax Planning",
                desc: "Year-round strategy to reduce surprises and plan for what’s next.",
                href: "/services/tax-planning",
              },
              {
                title: "Payroll",
                desc: "Payroll setup and ongoing processing that keeps your team paid and compliant.",
                href: "/services/payroll",
              },
              {
                title: "Business Advisory",
                desc: "Guidance for growth, cash flow, structure, and better decisions.",
                href: "/services/business-advisory",
              },
              {
                title: "Support & Compliance",
                desc: "Help with notices, filings, and questions—so you’re not doing it alone.",
                href: "/contact#contact",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-slate-900 group-hover:text-sky-800">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border text-slate-400 group-hover:text-sky-700 group-hover:border-sky-200">
                    →
                  </span>
                </div>

                <div className="mt-4 text-sm font-medium text-sky-700">
                  Learn more
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile-only CTA card under the grid */}
          <div className="mt-8 rounded-2xl border bg-slate-50 p-6 sm:p-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:hidden">
            <div>
              <div className="text-base font-semibold text-slate-900">
                Not sure which service you need?
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Tell us what’s going on and we’ll point you in the right direction.
              </p>
            </div>

            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* TAX UPDATES */}
      <section id="tax-updates" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Timely insights
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
                Tax updates & reminders
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
                General information to help you stay informed. Tax rules vary by filing
                situation—contact us for advice specific to you.
              </p>
            </div>

            <div className="mt-2 sm:mt-0">
              <Link
                href="/contact#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Ask about your situation
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {taxUpdates.map((u) => (
              <a
                key={u.title}
                href={u.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="text-xs font-medium text-slate-500">
                  {u.dateLabel} • {u.source}
                </div>

                <div className="mt-2 text-base font-semibold text-slate-900 group-hover:text-sky-800">
                  {u.title}
                </div>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {u.summary}
                </p>

                <div className="mt-4 text-sm font-medium text-sky-700">
                  Read more ↗
                </div>
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            This section is informational and may change. We recommend confirming details
            with official guidance or contacting our office for personalized help.
          </p>
        </div>
      </section>
    </main>
  );
}
