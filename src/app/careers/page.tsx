import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: `Careers | ${site.name}`,
  description: `Career opportunities at ${site.name}.`,
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Careers</p>

        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          Join our team
        </h1>

        <p className="mt-4 text-base text-slate-600 max-w-2xl">
          We’re not actively hiring at the moment, but we’re always happy to connect with
          talented professionals in tax, accounting, and bookkeeping.
        </p>

        <div className="mt-8 rounded-2xl border bg-white p-6 sm:p-7">
          <div className="text-base font-semibold text-slate-900">
            Interested in future opportunities?
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Send us a note with your resume and the type of role you’re looking for.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800"
            >
              Contact us
            </Link>

            <a
              href={`mailto:${site.email ?? ""}`}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Email us
            </a>
          </div>

          {!site.email && (
            <p className="mt-3 text-xs text-slate-500">
              Tip: Add an email in <code className="font-mono">lib/site.ts</code> (e.g.{" "}
              <code className="font-mono">email: "info@yourdomain.com"</code>) to enable the email button.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
