export type NavItem = {
  sectionId: string
  label: string
  href: string
}

export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email"
  href: string
}

export type StatItem = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  note?: string
}

export type ExperienceItem = {
  role: string
  company: string
  dates: string
  location: string
  summary: string
  points: string[]
  stack: string[]
  certificateHref?: string
  updateNote?: string
}

export type CaseStudySection = {
  title: string
  paragraphs: string[]
}

export type ProjectItem = {
  slug: string
  title: string
  year: string
  description: string
  summary: string
  tags: string[]
  codeHref?: string
  liveHref?: string
  caseStudy?: {
    intro: string
    sections: CaseStudySection[]
    outcome: string
  }
}

export type CredentialItem = {
  title: string
  issuer: string
  date: string
  href?: string
  note?: string
}

export type AchievementItem = {
  title: string
  detail: string
  href?: string
}
