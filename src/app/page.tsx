import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Ecora Tax & Accounting | CPA Services in the DMV Area",
  description:
    "CPA-led tax preparation, bookkeeping, payroll, and advisory services for individuals and small businesses across Maryland, DC, and Northern Virginia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ecora Tax & Accounting | CPA Services in the DMV Area",
    description:
      "Trusted CPA services for individuals and small businesses in Maryland, DC, and Northern Virginia.",
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecora Tax & Accounting",
    description:
      "CPA-led tax, bookkeeping, and advisory services across Maryland, DC, and Northern Virginia.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="bg-linear-to-br from-sky-900 via-sky-800 to-sky-700 text-white">
        <div className="mx-auto max-w-5xl px-4 pt-10 pb-16">
          {/* Business name (primary identity) */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            Ecora Tax &amp; Business COnsulting LLC
          </h1>

          {/* Credential (secondary trust signal) */}
          <p className="mt-2 text-sm md:text-base uppercase tracking-[0.25em] text-sky-200">
            Certified Public Accountant
          </p>

          {/* Service headline (value proposition) */}
          <h2 className="mt-6 text-2xl md:text-3xl font-medium leading-snug text-white">
            Stress-free Tax &amp; Accounting Services
          </h2>

          {/* Short supporting line */}
          <p className="mt-3 text-base md:text-lg text-sky-100/90 max-w-xl">
            Helping individuals and small businesses stay compliant and save time.
          </p>

          {/* Longer supporting description (smaller) */}
          <p className="mt-4 text-sm md:text-base text-sky-100/85 max-w-xl">
            Get personalized tax preparation, bookkeeping, and advisory support from a CPA
            who understands your situation and explains everything in clear language.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-white text-sky-900 hover:bg-sky-50"
            >
              Request a consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-sky-200/70 text-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>

          {/* Footer line (smallest) */}
          <p className="mt-5 text-xs text-sky-200/90">
            Serving clients across Maryland, Washington DC, and Northern Virginia · Call:{" "}
            {site.phoneDisplay}
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                What we do
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
                Services tailored to individuals &amp; small businesses
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
                Clear guidance, accurate reporting, and proactive support—so you can stay compliant
                and focus on what matters.
              </p>
            </div>

            <div className="mt-2 sm:mt-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                View all services
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                desc: "Payroll support that keeps your team paid and your records organized.",
                href: "/services/payroll",
              },
              {
                title: "Business Advisory",
                desc: "Guidance for growth, cash flow, and better decisions—without jargon.",
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-slate-900 group-hover:text-sky-800">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>

                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border text-slate-400 group-hover:border-sky-200 group-hover:text-sky-700">
                    →
                  </span>
                </div>

                <div className="mt-4 text-sm font-medium text-sky-700">
                  Learn more
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border bg-slate-50 p-6 sm:p-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-base font-semibold text-slate-900">
                Not sure which service you need?
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Tell us what’s going on and we’ll point you in the right direction.
                We typically respond within 1 business day.
              </p>
            </div>

            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
