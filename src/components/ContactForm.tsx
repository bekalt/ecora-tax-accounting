"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type FormState = "idle" | "submitting" | "sent";
type PreferredContact = "Email" | "Phone";

type FieldErrors = Partial<{
  name: string;
  email: string;
  phone: string;
  message: string;
}>;

const SERVICES = [
  "Tax Preparation",
  "Bookkeeping",
  "Tax Planning",
  "Payroll",
  "Business Advisory",
] as const;

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  // field values
  const [preferred, setPreferred] = useState<PreferredContact>("Email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<(typeof SERVICES)[number]>("Tax Preparation");
  const [message, setMessage] = useState("");

  // UI messages
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState<string | null>(null);

  const mailtoHref = useMemo(() => {
    const to = site.email ?? "";
    const subject = encodeURIComponent(`New website inquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone.trim()}\nPreferred contact: ${preferred}\nService: ${service}\n\nMessage:\n${message.trim()}\n`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [name, email, phone, preferred, service, message]);

  function validate(): FieldErrors {
    const next: FieldErrors = {};

    if (!name.trim()) next.name = "Please enter your full name.";

    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";

    if (preferred === "Phone" && !phone.trim())
      next.phone = "Please enter a phone number so we can call you.";

    if (!message.trim()) next.message = "Please enter a short message.";

    return next;
  }

  function openEmailClient() {
    // mailto must be triggered by user action; keep it synchronous
    window.location.href = mailtoHref;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice(null);

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");

    // Open email client immediately (best chance to not be blocked)
    openEmailClient();

    // Even if blocked, move to confirmation state so the user sees next steps
    window.setTimeout(() => setState("sent"), 350);
  }

  async function copyEmail() {
    if (!site.email) return;
    try {
      await navigator.clipboard.writeText(site.email);
      setNotice("Email copied to clipboard.");
      window.setTimeout(() => setNotice(null), 1600);
    } catch {
      setNotice("Could not copy email. Please copy it manually.");
      window.setTimeout(() => setNotice(null), 2000);
    }
  }

  function resetForm() {
    setState("idle");
    setErrors({});
    setNotice(null);
    setPreferred("Email");
    setName("");
    setEmail("");
    setPhone("");
    setService("Tax Preparation");
    setMessage("");
  }

  // ✅ Sent state UI
  if (state === "sent") {
    return (
      <div className="rounded-2xl border bg-slate-50 px-6 py-5">
        <div className="text-base font-semibold text-slate-900">
          Almost done — please click <span className="font-semibold">Send</span> in your email app.
        </div>

        <p className="mt-2 text-sm text-slate-600">
          We opened a pre-filled draft for you. If your email app didn’t open, you can try again,
          call us at{" "}
          <a className="font-medium text-sky-700 hover:underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          {site.email ? (
            <>
              {" "}
              or email{" "}
              <a className="font-medium text-sky-700 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </>
          ) : (
            "."
          )}
        </p>

        {notice ? (
          <div className="mt-4 rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-700">
            {notice}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setState("submitting");
              openEmailClient();
              window.setTimeout(() => setState("sent"), 350);
            }}
            className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2 text-sm font-medium text-white hover:bg-sky-800"
          >
            Open email draft again
          </button>

          {site.email ? (
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium text-slate-900 hover:bg-white"
            >
              Copy email
            </button>
          ) : null}

          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium text-slate-900 hover:bg-white"
          >
            Start over
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Tip: If you’re on mobile, your default Mail app usually opens. If you use webmail, you may
          need to copy the email address instead.
        </p>
      </div>
    );
  }

  // ✅ Main form UI
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <div className="text-sm font-medium text-slate-900">Request a consultation</div>
        <p className="mt-1 text-sm text-slate-600">We typically respond within 1 business day.</p>
      </div>

      {/* Preferred contact toggle */}
      <div className="rounded-2xl border bg-slate-50 p-3">
        <div className="text-xs font-medium text-slate-600">Preferred contact</div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setPreferred("Email")}
            className={`h-10 rounded-xl text-sm font-medium transition ${
              preferred === "Email" ? "bg-white shadow-sm border" : "hover:bg-white/60"
            }`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setPreferred("Phone")}
            className={`h-10 rounded-xl text-sm font-medium transition ${
              preferred === "Phone" ? "bg-white shadow-sm border" : "hover:bg-white/60"
            }`}
          >
            Phone
          </button>
        </div>
      </div>

      {notice ? (
        <div className="rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-700">
          {notice}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-900">
            Full name <span className="text-slate-500">*</span>
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
            }}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="h-11 rounded-xl border px-4 text-sm outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="Jane Doe"
            autoComplete="name"
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-rose-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-900">
            Email <span className="text-slate-500">*</span>
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            }}
            type="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="h-11 rounded-xl border px-4 text-sm outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="jane@email.com"
            autoComplete="email"
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-rose-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-slate-900">
            Phone{" "}
            <span className="text-slate-500">{preferred === "Phone" ? "*" : "(optional)"}</span>
          </label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
            }}
            required={preferred === "Phone"}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="h-11 rounded-xl border px-4 text-sm outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="(555) 555-5555"
            autoComplete="tel"
          />
          {errors.phone ? (
            <p id="phone-error" className="text-xs text-rose-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="grid gap-1">
          <label htmlFor="service" className="text-sm font-medium text-slate-900">
            Service
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value as (typeof SERVICES)[number])}
            className="h-11 rounded-xl border px-4 text-sm outline-none focus:ring-2 focus:ring-sky-200"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm font-medium text-slate-900">
          Message <span className="text-slate-500">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
          }}
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
          placeholder="Tell us what you need and any deadlines (e.g., tax filing date)."
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-rose-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-800 disabled:opacity-60"
        >
          {state === "submitting"
            ? "Opening your email…"
            : preferred === "Phone"
            ? "Request a call"
            : "Request consultation"}
        </button>

        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-white"
        >
          Call instead
        </a>

        {state === "submitting" ? (
          <span className="text-xs text-slate-500">
            If nothing opens, we’ll show alternate contact options next.
          </span>
        ) : null}
      </div>

      <p className="text-xs text-slate-500">
        By submitting, you’ll open a pre-filled email draft in your email app. No information is
        stored on this website.
      </p>
    </form>
  );
}
