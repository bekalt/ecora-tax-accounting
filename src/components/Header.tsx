"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";

const serviceLinks = [
  { href: "/services/tax-preparation", label: "Tax Preparation" },
  { href: "/services/bookkeeping", label: "Bookkeeping" },
  { href: "/services/tax-planning", label: "Tax Planning" },
  { href: "/services/payroll", label: "Payroll" },
  { href: "/services/business-advisory", label: "Business Advisory" },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Portal root (client-only)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const bookingUrl =
    typeof (site as any).bookingUrl === "string" ? (site as any).bookingUrl.trim() : "";

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname?.startsWith(href);
    };
  }, [pathname]);

  useEffect(() => {
    const root = document.getElementById("portal-root");
    setPortalRoot(root);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(site.phoneDisplay);
    } catch {}
  }

  return (
    <header
      className="sticky top-0 z-[9999] border-b bg-white/85 backdrop-blur pointer-events-auto"
      style={{ contain: "layout paint" }}
    >
      <div className="px-4 sm:px-6 pointer-events-auto">
        <div className="flex items-center justify-between gap-4 py-3 pointer-events-auto">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100 p-1.5">
              <Image
                src="/logo.png"
                alt="Ecora Tax & Business Consulting LLC logo"
                width={56}
                height={56}
                priority
                className="object-contain"
              />
            </span>

            <span className="font-semibold text-sm md:text-base text-slate-900 hidden sm:inline">
              {site.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm pointer-events-auto">
            <Link
              href="/"
              className={isActive("/") ? "text-sky-700 font-medium" : "hover:text-sky-700"}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={isActive("/about") ? "text-sky-700 font-medium" : "hover:text-sky-700"}
            >
              About
            </Link>

            {/* ✅ Desktop: simple Services link (no dropdown, no arrow) */}
            <Link
              href="/services"
              className={isActive("/services") ? "text-sky-700 font-medium" : "hover:text-sky-700"}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className={isActive("/contact") ? "text-sky-700 font-medium" : "hover:text-sky-700"}
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={copyPhone}
              className="hidden lg:inline-flex items-center text-slate-600 hover:text-sky-700"
              title="Copy phone number"
              aria-label={`Copy phone number ${site.phoneDisplay}`}
            >
              Call:
              <span className="ml-1 font-medium text-slate-900">{site.phoneDisplay}</span>
            </button>

            {bookingUrl ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-sky-700 px-4 py-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-white"
              >
                Book a Call
              </a>
            ) : (
              <Link
                href="/contact#contact"
                className="inline-flex rounded-full border border-sky-700 px-4 py-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-white"
              >
                Schedule a Call
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
            aria-label="Open menu"
          >
            <span className="text-base leading-none">☰</span>
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer (Portal) */}
      {portalRoot &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100000] md:hidden bg-black/55"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white p-4 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm md:text-base text-slate-900">
  {site.name}
</span>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border px-3 py-2 text-xs hover:bg-slate-50"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-4 grid gap-2 text-sm">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={
                    (isActive("/")
                      ? "bg-slate-50 text-sky-700 font-medium"
                      : "text-slate-900 hover:bg-slate-50") + " rounded-lg px-3 py-2"
                  }
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className={
                    (isActive("/about")
                      ? "bg-slate-50 text-sky-700 font-medium"
                      : "text-slate-900 hover:bg-slate-50") + " rounded-lg px-3 py-2"
                  }
                >
                  About
                </Link>

                {/* Mobile: Services accordion with arrow */}
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-slate-50"
                  >
                    <span className={isActive("/services") ? "text-sky-700 font-medium" : "text-slate-900"}>
                      Services
                    </span>
                    <span className="text-xs">{servicesOpen ? "▴" : "▾"}</span>
                  </button>

                  {servicesOpen && (
                    <div className="bg-white">
                      {/* ✅ Mobile-only "View all services" */}
                      <Link
                        href="/services"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm hover:bg-slate-50 text-slate-900"
                      >
                        View all services →
                      </Link>
                      <div className="h-px bg-slate-100" />
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className={
                            (pathname === s.href
                              ? "bg-slate-50 text-sky-700 font-medium"
                              : "hover:bg-slate-50 text-slate-900") + " block px-3 py-2 text-sm"
                          }
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={
                    (isActive("/contact")
                      ? "bg-slate-50 text-sky-700 font-medium"
                      : "text-slate-900 hover:bg-slate-50") + " rounded-lg px-3 py-2"
                  }
                >
                  Contact
                </Link>

                <a
                  href={`tel:${site.phoneTel}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50 text-slate-900"
                >
                  Call {site.phoneDisplay}
                </a>

                {bookingUrl ? (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2 text-xs font-medium text-white hover:bg-sky-800"
                  >
                    Book a Call
                  </a>
                ) : (
                  <Link
                    href="/contact#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2 text-xs font-medium text-white hover:bg-sky-800"
                  >
                    Schedule a Call
                  </Link>
                )}
              </nav>
            </div>
          </div>,
          portalRoot
        )}
    </header>
  );
}
