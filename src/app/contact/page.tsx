import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Ecora Tax & Accounting",
  description:
    "Contact Ecora Tax & Accounting for CPA-led tax preparation, bookkeeping, payroll, and advisory services across Maryland, DC, and Northern Virginia.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Ecora Tax & Accounting",
    description:
      "Reach out for CPA-led tax and accounting services across the DMV area. Typical response: 1 business day.",
    url: "/contact",
    siteName: site.name,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Tell us what you need and we’ll respond with next steps and what to prepare.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Left: Contact info */}
        <aside className="rounded-2xl border bg-white px-7 py-6 shadow-sm lg:col-span-1">
          <h2 className="text-lg font-semibold text-slate-900">Get in touch</h2>

          <div className="mt-4 grid gap-3 text-sm">
            <div>
              <div className="text-slate-500">Phone</div>
              <a
                className="font-medium text-sky-700 hover:underline"
                href={`tel:${site.phoneTel}`}
              >
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

            {site.location ? (
              <div>
                <div className="text-slate-500">Location</div>
                <div className="font-medium text-slate-900">{site.location}</div>
              </div>
            ) : null}

            <div className="pt-2 text-xs text-slate-500">
              Serving clients across Maryland, Washington DC, and Northern Virginia.
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 px-5 py-4">
            <div className="text-sm font-semibold text-slate-900">Business hours</div>
            <div className="mt-1 text-sm text-slate-600">
              Mon–Fri: 9:00 AM – 5:00 PM
              <br />
              Weekends: By appointment
            </div>
          </div>

          {/* Trust / What to expect */}
          <div className="mt-6 rounded-xl border bg-white px-5 py-4">
            <div className="text-sm font-semibold text-slate-900">What to expect</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-slate-400" />
                <span>Typical response within 1 business day</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-slate-400" />
                <span>Clear next steps and a simple document checklist</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-slate-400" />
                <span>Secure, confidential handling</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right: Form */}
        <section
          id="contact"
          className="rounded-2xl border bg-white px-7 py-6 shadow-sm lg:col-span-2"
        >
          <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
          <p className="mt-2 text-sm text-slate-600">
            Share the basics and we’ll follow up. (No sensitive info needed.)
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Please do not include SSNs, full account numbers, or other sensitive personal
            information in this form.
          </p>
        </section>
      </div>
    </main>
  );
}
