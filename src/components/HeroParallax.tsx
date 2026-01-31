"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function HeroParallax() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Must exist at /public/images/hero-bg.jpg
  const HERO_BG = "/images/hero-bg.jpg";

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let raf = 0;

    const onScroll = () => {
      if (!bgRef.current) return;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const translateY = Math.min(y * 0.12, 60);
        bgRef.current!.style.transform = `translateY(${translateY}px) scale(1.02)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden text-white min-h-[520px]">
      {/* Background image layer (never intercept clicks) */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-[position:50%_20%] will-change-transform pointer-events-none"
        style={{
          backgroundColor: "#0b1220",
          backgroundImage: `url('${HERO_BG}')`,
          transform: "translateY(0px) scale(1.02)",
        }}
        aria-hidden="true"
      />

      {/* Overlay for readability (never intercept clicks) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-950/85 via-sky-900/70 to-sky-800/75 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content (clickable) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-10 pb-16 pointer-events-auto">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">{site.name}</h1>

        <p className="mt-2 text-sm md:text-base uppercase tracking-[0.25em] text-sky-200">
          Certified Public Accountant
        </p>

        <h2 className="mt-6 text-2xl md:text-3xl font-medium leading-snug">
  Tax &amp; Accounting Services Backed by Over 15 Years of CPA Experience
</h2>


        <p className="mt-3 text-base md:text-lg text-sky-100/90 max-w-xl">
  Helping individuals and small businesses make confident, informed financial decisions.
</p>

        <p className="mt-4 text-sm md:text-base text-sky-100/85 max-w-xl">
          Personalized tax preparation, bookkeeping, and advisory services across {site.serviceArea}.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
  href={site.bookingUrl}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-white text-sky-900 hover:bg-sky-50"
>
  Schedule Appointment
</a>


          {/* ✅ This now opens the services page */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-white/70 hover:bg-white/10"
          >
            View Services
          </Link>
        </div>

        <p className="mt-5 text-xs text-sky-200/90">
          Serving {site.serviceArea} · Call: {site.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
