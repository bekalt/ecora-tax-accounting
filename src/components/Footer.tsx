import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Resources */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/careers" className="hover:text-sky-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sky-700">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>

            {site.address?.street && (
              <div className="mt-3 text-sm text-slate-600">
                {site.address.street}
                {site.address.city ? `, ${site.address.city}` : ""}
                {site.address.state ? `, ${site.address.state}` : ""}{" "}
                {site.address.zip}
              </div>
            )}

            {site.phoneDisplay && site.phoneTel && (
              <div className="mt-2 text-sm text-slate-600">
                <span className="font-medium">Tel:</span>{" "}
                <a
                  href={`tel:${site.phoneTel}`}
                  className="hover:text-sky-700"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            )}
          </div>

          {/* Social */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Connect</div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              {site.social?.linkedin && (
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-700"
                >
                  LinkedIn
                </a>
              )}

              {site.social?.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-700"
                >
                  Facebook
                </a>
              )}

              {site.social?.twitter && (
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-700"
                >
                  X
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-xs text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div>Serving {site.serviceArea}</div>
        </div>
      </div>
    </footer>
  );
}
