import type { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Ecora Tax & Accounting",
  description:
    "Learn about Ecora Tax & Accounting—CPA-led tax and accounting services for individuals and small businesses across Maryland, DC, and Northern Virginia.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Ecora Tax & Accounting",
    description:
      "CPA-led tax and accounting support across the DMV area—clear guidance, accurate work, and dependable follow-through.",
    url: "/about",
    siteName: site.name,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">About</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Ecora Tax &amp; Accounting provides CPA-led tax and accounting services for individuals and
        small businesses across Maryland, Washington DC, and Northern Virginia.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Our approach</h2>
          <p className="mt-2 text-sm text-slate-600">
            We focus on accuracy, clarity, and practical guidance. You’ll get straightforward
            explanations, clean deliverables, and a clear next step—without jargon.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">CPA-led guidance</div>
              <p className="mt-1 text-sm text-slate-600">
                Work with a CPA who can explain what matters and why.
              </p>
            </div>
            <div className="rounded-xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Clear communication</div>
              <p className="mt-1 text-sm text-slate-600">
                You’ll know what we need, what we’re doing, and what’s next.
              </p>
            </div>
            <div className="rounded-xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Accurate, organized work</div>
              <p className="mt-1 text-sm text-slate-600">
                Reliable records and reporting that hold up at tax time.
              </p>
            </div>
            <div className="rounded-xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">DMV area support</div>
              <p className="mt-1 text-sm text-slate-600">
                Serving clients across MD, DC, and Northern Virginia.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800"
            >
              Request a consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-white"
            >
              View services
            </Link>
          </div>
        </section>

        <aside className="rounded-2xl border bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-900">Contact</div>
          <div className="mt-3 grid gap-3 text-sm">
            <div>
              <div className="text-slate-500">Phone</div>
              <a className="font-medium text-sky-700 hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </div>
            {site.email ? (
              <div>
                <div className="text-slate-500">Email</div>
                <a
                  className="font-medium text-sky-700 hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>
            ) : null}
            <div className="pt-1 text-xs text-slate-500">
              Typical response within 1 business day.
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
