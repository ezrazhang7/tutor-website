import { absoluteUrl, siteDescription, siteName } from "../seo";

export function GET() {
  const body = [
    `# ${siteName}`,
    "",
    `> ${siteDescription}`,
    "",
    "This site describes private tutoring and music lesson services offered by Yaxin Zhang in Arlington, Massachusetts and online.",
    "",
    "## Pages",
    `- Home: ${absoluteUrl("/")}`,
    `- Services: ${absoluteUrl("/services")}`,
    `- Contact: ${absoluteUrl("/contact")}`,
    "",
    "## Topics",
    "- SAT prep",
    "- Math tutoring",
    "- Academic writing",
    "- AP coursework and exam prep",
    "- College essay coaching",
    "- Violin and piano lessons",
    "",
    "## Contact",
    `- Use the contact page: ${absoluteUrl("/contact")}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
