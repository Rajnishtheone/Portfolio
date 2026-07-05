import type { NavItem, SocialLink, StatItem } from "@/content/types"

export const siteConfig = {
  name: "Rajnish Kumar",
  firstName: "Rajnish",
  role: "Software Engineer",
  headline: "Software Engineer",
  summary:
    "Software engineer building full-stack web applications and AI-assisted tools with TypeScript, React, Node.js, and backend-focused product work.",
  heroLine:
    "I build full-stack web applications and AI-assisted tools with TypeScript, React, Node.js, and solid backend systems.",
  availability: "Open to Software Engineer and Full Stack roles",
  location: "India",
  email: "Rajnishkk97@gmail.com",
  whatsappNumber: "919798669871",
  github: "https://github.com/Rajnishtheone",
  linkedin: "https://linkedin.com/in/rajnish-kumar-11808a254",
  resumeHref: "/resume",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  chips: ["React", "Node.js", "TypeScript", "MongoDB", "Docker", "GraphQL", "OpenAI", "Redis"],
  about: [
    "I'm a B.Tech Information Technology graduate from CUSAT, finishing in 2026 with a CGPA in the 8.5-8.7 range.",
    "Most of my work is backend-leaning full-stack engineering across the MERN stack, with a strong focus on authentication, API design, testing, deployment, and clean project structure.",
    "I've also built AI-assisted features with the OpenAI API and I'm continuing to grow through hands-on work with agentic AI, RAG, and workflow automation.",
  ],
  stackLine:
    "I mostly work with React, Node.js, TypeScript, and MongoDB, with Docker, GraphQL, Redis, and OpenAI integrations where they fit the product.",
  contactLine:
    "If you want to talk about a role, a project, or a collaboration, email or WhatsApp both work well.",
  aboutFocus: [
    "Building backend systems with clean auth, clear API boundaries, and dependable error handling.",
    "Shipping full-stack projects that feel structured and maintainable instead of demo-only.",
    "Using AI where it helps the product flow, not just where it looks impressive on a project list.",
  ],
}

export const navigation: NavItem[] = [
  { sectionId: "home", label: "Home", href: "/#home" },
  { sectionId: "projects", label: "Projects", href: "/#projects" },
  { sectionId: "experience", label: "Experience", href: "/#experience" },
  { sectionId: "about", label: "About", href: "/#about" },
  { sectionId: "contact", label: "Contact", href: "/#contact" },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}` },
]

export const stats: StatItem[] = [
  { value: 2, label: "Internships", note: "Full Stack and AI" },
  { value: 41, label: "Public GitHub repositories", suffix: "+" },
  { value: 500, label: "LinkedIn connections", suffix: "+" },
  { value: 2, label: "Open-source programs", note: "GSSoC 2025 and NSOC 2026" },
]
