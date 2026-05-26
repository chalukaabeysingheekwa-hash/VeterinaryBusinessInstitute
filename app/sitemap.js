export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://www.veterinarybusinessinstitute.com";
  const siteLastModified = "2026-03-31T00:00:00.000Z";

  // In a real application, you might fetch blog posts, webinars, 
  // or podcast episodes dynamically. For static exports, we define
  // core routes here or let Next.js generate them if dynamic.
  const coreRoutes = [
    "",
    "/about",
    "/events",
    "/podcast",
    "/reviews",
    "/resources",
    "/guest-speaker",
    "/community",
    "/marketing",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/webinars",
    "/webinars/registration",
    "/consultation",
    "/thank-you",
    "/resources/tools",
    "/resources/apps",
    "/resources/faq",
    "/resources/hub"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastModified,
    changeFrequency: route === "" || route === "/podcast" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...coreRoutes];
}
