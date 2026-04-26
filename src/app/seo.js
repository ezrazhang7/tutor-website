const FALLBACK_SITE_ORIGIN = "http://localhost:3000";

export const siteName = "Yaxin Zhang Tutoring";
export const siteDescription =
  "Private tutoring in Arlington, MA for SAT prep, math, academic writing, AP coursework, college essays, and music lessons.";

export function getSiteOrigin() {
  const rawOrigin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "";

  if (!rawOrigin) {
    return FALLBACK_SITE_ORIGIN;
  }

  return rawOrigin.startsWith("http") ? rawOrigin : `https://${rawOrigin}`;
}

export const siteOrigin = getSiteOrigin();

export function absoluteUrl(path = "/") {
  return new URL(path, siteOrigin).toString();
}

export function pageMetadata({
  title,
  description,
  path,
}) {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: siteName,
      description: siteDescription,
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: "Yaxin Zhang",
      jobTitle: "Private Tutor",
      description: siteDescription,
      url: absoluteUrl("/"),
      knowsAbout: [
        "SAT prep",
        "Academic writing",
        "Math tutoring",
        "AP coursework",
        "College essays",
        "Violin lessons",
        "Piano lessons",
      ],
      areaServed: [
        "Arlington, Massachusetts",
        "Belmont, Massachusetts",
        "Lexington, Massachusetts",
        "Cambridge, Massachusetts",
        "Greater Boston",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#service"),
      name: siteName,
      url: absoluteUrl("/"),
      description: siteDescription,
      areaServed: [
        "Arlington, Massachusetts",
        "Belmont, Massachusetts",
        "Lexington, Massachusetts",
        "Cambridge, Massachusetts",
        "Greater Boston",
      ],
      provider: {
        "@id": absoluteUrl("/#person"),
      },
      serviceType: [
        "SAT tutoring",
        "Math tutoring",
        "Academic writing tutoring",
        "AP exam tutoring",
        "College essay coaching",
        "Music lessons",
      ],
    },
  ],
};
