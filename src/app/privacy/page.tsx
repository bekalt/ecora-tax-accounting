import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Ecora Tax & Accounting",
  description:
    "Privacy Policy for Ecora Tax & Accounting. Learn how we handle information submitted through our website and how to contact us with questions.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Ecora Tax & Accounting",
    description:
      "How Ecora Tax & Accounting handles information submitted through the website.",
    url: "/privacy",
    siteName: site.name,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            This page explains how Ecora Tax &amp; Accounting handles information submitted through
            this website.
          </p>
        </div>

        <div className="mt-2 sm:mt-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="prose prose-slate max-w-none">
          <h2>Summary</h2>
          <ul>
            <li>
              This website does <strong>not</strong> store submitted form content on a server.
            </li>
            <li>
              Messages sent through the contact form open a pre-filled email draft in your email
              app.
            </li>
            <li>
              Please do not submit sensitive personal information (e.g., SSNs or full account
              numbers) through the website.
            </li>
          </ul>

          <h2>Information you provide</h2>
          <p>
            If you contact us through the website, you may provide information such as your name,
            email address, phone number, and a brief message describing what you need. This
            information is used to respond to your inquiry and provide services.
          </p>

          <h2>How the contact form works</h2>
          <p>
            The contact form on this website uses a <code>mailto:</code> link to open your email
            application with a pre-filled message. The website itself does not transmit or store
            your message on a server.
          </p>

          <h2>Sensitive information</h2>
          <p>
            Do not include sensitive personal information in website messages, such as Social
            Security Numbers, full bank account numbers, or full credit card numbers. If sensitive
            information is needed, we will provide a secure method to share it.
          </p>

          <h2>Third-party services</h2>
          <p>
            Depending on your device and settings, clicking email or phone links may open third-party
            applications (such as your email client or dialer). Their privacy practices are governed
            by their own policies.
          </p>

          <h2>Retention</h2>
          <p>
            If you email us, we may retain your email communications as needed for business and
            recordkeeping purposes.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be posted on this page.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact{" "}
            <strong>{site.name}</strong>:
          </p>
          <ul>
            <li>
              Phone:{" "}
              <a href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            {site.email ? (
              <li>
                Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            ) : null}
            {site.location ? <li>Location: {site.location}</li> : null}
          </ul>

          <hr />

          <p className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </main>
  );
}
