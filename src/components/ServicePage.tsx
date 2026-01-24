import Link from "next/link";

type Faq = { q: string; a: string };
type Cta = { label: string; href: string };

type Props = {
  title: string;
  subtitle: string;
  bullets: string[];
  whoItsFor?: string | string[];
  faqs?: Faq[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Optional override for the breadcrumb parent (defaults to Services index) */
  parentHref?: string;
  parentLabel?: string;
};

export default function ServicePage({
  title,
  subtitle,
  bullets,
  whoItsFor,
  faqs,
  primaryCta = { label: "Request a consultation", href: "/contact#contact" },
  secondaryCta = { label: "View all services", href: "/services" },
  parentHref = "/services",
  parentLabel = "Services",
}: Props) {
  const whoList =
    typeof whoItsFor === "string"
      ? [whoItsFor]
      : whoItsFor ?? [
          "Individuals and families who want clear answers",
          "Independent contractors and 1099 earners",
          "Small business owners who want dependable support",
        ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href={parentHref} className="hover:text-sky-700">
            {parentLabel}
          </Link>{" "}
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-slate-700">{title}</span>
        </nav>

        {/* Heading */}
        <div className="mt-4">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">{subtitle}</p>

          {/* Trust chips */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border bg-white px-3 py-1 text-slate-700">
              CPA-led guidance
            </span>
            <span className="rounded-full border bg-white px-3 py-1 text-slate-700">
              Secure, confidential handling
            </span>
            <span className="rounded-full border bg-white px-3 py-1 text-slate-700">
              Typical response: 1 business day
            </span>
          </div>
        </div>

        {/* Layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900">
              What you can expect
            </h2>

            <ul className="mt-4 grid gap-3 text-sm text-slate-700">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-700"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* Optional FAQ */}
            {faqs?.length ? (
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-slate-900">FAQs</h2>
                <div className="mt-4 grid gap-3">
                  {faqs.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-xl border bg-slate-50 p-4"
                    >
                      <summary className="cursor-pointer list-none text-sm font-medium text-slate-900">
                        <span className="flex items-start justify-between gap-4">
                          <span>{item.q}</span>
                          <span
                            className="mt-0.5 text-slate-500 transition group-open:rotate-180"
                            aria-hidden="true"
                          >
                            ▾
                          </span>
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-700">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Bottom CTA band (helps conversions on longer pages) */}
            <div className="mt-10 rounded-2xl border bg-slate-50 p-6">
              <div className="grid gap-4 md:grid-cols-[1.5fr_1fr] md:items-center">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Ready to get started?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Tell us what you’re trying to solve and we’ll recommend the
                    best next step.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                  >
                    {primaryCta.label}
                  </Link>
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                  >
                    {secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-2xl border bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">
              Who this is for
            </div>

            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              {whoList.map((w) => (
                <li key={w} className="flex gap-3">
                  <span
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-slate-400"
                    aria-hidden="true"
                  />
                  <span>{w}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border bg-white p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Typical next steps
              </div>
              <ol className="mt-3 grid gap-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-500">1.</span>
                  <span>Request a consult and share your goal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-500">2.</span>
                  <span>We confirm what’s needed and timeline.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-slate-500">3.</span>
                  <span>We handle the work and keep you updated.</span>
                </li>
              </ol>

              <Link
                href={primaryCta.href}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-sky-700 px-5 py-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
              >
                {primaryCta.label}
              </Link>

              <p className="mt-3 text-center text-xs text-slate-500">
                No pressure—just clear next steps.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
