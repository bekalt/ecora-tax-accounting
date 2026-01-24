import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            404 — Page not found
          </p>

          <h1 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
            We couldn’t find that page.
          </h1>

          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
            The link may be outdated, or the page may have moved. You can return to the homepage,
            browse services, or contact us and we’ll point you in the right direction.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800"
            >
              Go to homepage
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              View services
            </Link>

            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-700 px-6 py-2.5 text-sm font-medium text-sky-700 hover:bg-sky-700 hover:text-white"
            >
              Request a consultation
            </Link>
          </div>

          <div className="mt-6 rounded-xl border bg-slate-50 p-4">
            <div className="text-sm font-semibold text-slate-900">Need help fast?</div>
            <p className="mt-1 text-sm text-slate-600">
              Call{" "}
              <a
                className="font-medium text-sky-700 hover:underline"
                href={`tel:${site.phoneTel}`}
              >
                {site.phoneDisplay}
              </a>{" "}
              or visit the contact page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
