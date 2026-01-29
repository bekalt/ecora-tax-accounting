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
  const [mounted, setMounted] = useState(false);

  // Make bookingUrl safe even if it's missing in site.ts
  const bookingUrl =
    typeof (site as any).bookingUrl === "string" ? (site as any).bookingUrl.trim() : "";

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname?.startsWith(href);
    };
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
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
      // Prefer E.164 if you want; display is more user-friendly to paste
      await navigator.clipboard.writeText(site.phoneDisplay);
      // No toast system here; keep it silent to avoid extra UI complexity
    } catch {
      // If copy fails, do nothing (still readable)
    }
  }

  return (
    <header className="sticky top-0 z-[9999] border-b bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        
<Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Ecora Tax & Business Consulting LLC logo"
    width={64}
    height={64}
    priority
  />

  <span className="font-semibold text-sm md:text-base text-slate-900 hidden sm:inline">
    {site.name}
  </span>
</Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
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

          {/* Services dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className={
                isActive("/services")
                  ? "text-sky-700 font-medium inline-flex items-center gap-1"
                  : "hover:text-sky-700 inline-flex items-center gap-1"
              }
            >
              Services <span className="text-xs">▾</span>
            </Link>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full pt-2">
              <div className="w-64 rounded-2xl border bg-white shadow-lg overflow-hidden">
                <Link href="/services" className="block px-4 py-3 text-sm hover:bg-slate-50">
                  View all services →
                </Link>
                <div className="h-px bg-slate-100" />
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={
                      (pathname === s.href
                        ? "bg-slate-50 text-sky-700 font-medium"
                        : "text-slate-900 hover:bg-slate-50") + " block px-4 py-3 text-sm"
                    }
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={isActive("/contact") ? "text-sky-700 font-medium" : "hover:text-sky-700"}
          >
            Contact
          </Link>

          {/* Mobile-only call link (avoid desktop "pick an app" prompt) */}
          <a
            href={`tel:${site.phoneTel}`}
            className="lg:hidden inline-flex hover:text-sky-700"
          >
            Call
          </a>

          {/* Desktop: show number (copyable) */}
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

      {/* Mobile overlay + drawer (Portal) */}
      {mounted &&
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
                <span className="font-semibold text-sm text-slate-900">{site.name}</span>
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

                {/* Services accordion */}
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

                {/* Mobile: keep tel: (dialer behavior is correct) */}
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
          document.body
        )}
    </header>
  );
}
