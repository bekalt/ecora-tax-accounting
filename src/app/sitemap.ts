import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${site.domain}`;

  const routes = [
    "/",
    "/about",
    "/services",
    "/services/tax-preparation",
    "/services/bookkeeping",
    "/services/tax-planning",
    "/services/payroll",
    "/services/business-advisory",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/services")
        ? 0.8
        : route === "/contact"
        ? 0.7
        : 0.6,
  }));
}
