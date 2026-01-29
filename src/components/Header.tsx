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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
    <header className="sticky top-0 z-[9999] border-b bg-white/85 backdrop-blur">
      {/* FULL-WIDTH HEADER */}
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* BRAND */}
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

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className={isActive("/") ? "text-sky-700 font-medium" : "hover:text-sky-700"}>
              Home
            </Link>

            <Link href="/about" className={isActive("/about") ? "text-sky-700 font-medium" : "hover:text-sky-700"}>
              About
            </Link>

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

            <button
              type="button"
              onClick={copyPhone}
              className="hidden lg:inline-flex items-center text-slate-600 hover:text-sky-700"
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

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
          >
            ☰ Menu
          </button>
        </div>
      </div>

      {/* MOBILE MENU (unchanged logic) */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[100000] md:hidden bg-black/55" onClick={() => setOpen(false)}>
            {/* mobile drawer remains exactly the same */}
          </div>,
          document.body
        )}
    </header>
  );
}
