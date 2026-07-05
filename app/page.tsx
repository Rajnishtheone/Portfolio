import Link from "next/link"
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"

import { PageFade } from "@/components/page-fade"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { StatCounter } from "@/components/stat-counter"
import { TagList } from "@/components/tag-list"
import { achievements, certifications, openSource } from "@/content/credentials"
import { experience } from "@/content/experience"
import { projects } from "@/content/projects"
import { siteConfig, socialLinks, stats } from "@/content/site"

export default function HomePage() {
  return (
    <PageFade>
      <div className="page-frame">
        <section id="home" className="page-section scroll-mt-28 space-y-12 pt-8 sm:pt-12">
          <Reveal className="max-w-4xl space-y-8">
            <div className="space-y-5">
              <p className="meta-text">{siteConfig.headline}</p>
              <h1 className="font-display text-6xl leading-none text-foreground sm:text-7xl lg:text-8xl">
                Hey, I&apos;m {siteConfig.firstName}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{siteConfig.heroLine}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <span className="meta-chip">{siteConfig.availability}</span>
              <Link href="/#projects" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
                View projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/resume" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="inline-flex items-center gap-1 transition-colors hover:text-accent">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </Reveal>
        </section>

        <section id="projects" className="page-section scroll-mt-28 space-y-8">
          <Reveal className="space-y-4">
            <p className="meta-text">Projects</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-3">
                <h2 className="font-display text-5xl leading-none text-foreground">Projects with clear technical depth.</h2>
                <p className="text-lg leading-8 text-muted-foreground">
                  These projects show backend systems, real-time workflows, role-based access, and practical AI features in context.
                </p>
              </div>
              <Link href="/resume" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent">
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </Reveal>
        </section>

        <section id="experience" className="page-section scroll-mt-28 space-y-10">
          <Reveal className="space-y-4">
            <p className="meta-text">Experience</p>
            <div className="max-w-3xl space-y-3">
              <h2 className="font-display text-5xl leading-none text-foreground">Internship work, open-source programs, and credentials.</h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The focus here is backend delivery, dependable collaboration habits, and steady progress into applied AI work.
              </p>
            </div>
          </Reveal>

          <Reveal className="space-y-10">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="space-y-4 border-b border-border pb-10 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl text-foreground">
                      {item.role} - {item.company}
                    </h3>
                    <p className="meta-text">
                      {item.dates} | {item.location}
                    </p>
                  </div>
                  {item.certificateHref ? (
                    <Link href={item.certificateHref} className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent">
                      Certificate
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{item.summary}</p>
                <ul className="max-w-4xl space-y-3 text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <TagList tags={item.stack} />
                {item.updateNote ? <p className="text-sm text-muted-foreground">{item.updateNote}</p> : null}
              </article>
            ))}
          </Reveal>

          <Reveal className="grid gap-8 lg:grid-cols-3">
            <section className="surface space-y-4">
              <div className="space-y-2">
                <p className="meta-text">Open Source</p>
                <h3 className="text-2xl text-foreground">Programs</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {openSource.map((item) => (
                  <li key={`${item.issuer}-${item.title}`} className="space-y-1">
                    <p className="text-foreground">{item.issuer}</p>
                    <p>{item.title}</p>
                    <p className="text-sm">{item.note}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="surface space-y-4">
              <div className="space-y-2">
                <p className="meta-text">Certifications</p>
                <h3 className="text-2xl text-foreground">Credentials</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {certifications.map((item) => (
                  <li key={`${item.issuer}-${item.title}`} className="space-y-1">
                    <p className="text-foreground">{item.title}</p>
                    <p>
                      {item.issuer} | {item.date}
                    </p>
                    {item.href ? (
                      <Link href={item.href} className="inline-flex items-center gap-1 text-sm transition-colors hover:text-accent">
                        View credential
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            <section className="surface space-y-4">
              <div className="space-y-2">
                <p className="meta-text">Achievements</p>
                <h3 className="text-2xl text-foreground">Selected highlights</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {achievements.map((item) => (
                  <li key={item.title} className="space-y-1">
                    <p className="text-foreground">{item.title}</p>
                    <p>{item.detail}</p>
                    {item.href ? (
                      <Link href={item.href} className="inline-flex items-center gap-1 text-sm transition-colors hover:text-accent">
                        View proof
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </section>

        <section id="about" className="page-section scroll-mt-28 space-y-10">
          <Reveal className="space-y-4">
            <p className="meta-text">About</p>
            <div className="max-w-3xl space-y-3">
              <h2 className="font-display text-5xl leading-none text-foreground">Backend-leaning full-stack engineering, with AI where it helps.</h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The work here is shaped by product delivery: structured APIs, real auth flows, deployment details, and AI features that support actual user tasks.
              </p>
            </div>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface space-y-5">
              {siteConfig.about.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg leading-8 text-foreground">{siteConfig.stackLine}</p>
              <TagList tags={siteConfig.chips} />
            </div>

            <div className="surface space-y-5">
              <div className="space-y-2">
                <p className="meta-text">Focus</p>
                <h3 className="text-3xl text-foreground">What Rajnish is working on right now</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {siteConfig.aboutFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="page-section scroll-mt-28 space-y-10">
          <Reveal className="space-y-4">
            <p className="meta-text">Contact</p>
            <div className="max-w-3xl space-y-3">
              <h2 className="font-display text-5xl leading-none text-foreground">A direct way to get in touch.</h2>
              <p className="text-lg leading-8 text-muted-foreground">{siteConfig.contactLine}</p>
            </div>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="surface space-y-5">
              <div className="space-y-2">
                <p className="meta-text">Direct</p>
                <p className="text-2xl text-foreground">{siteConfig.email}</p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                {socialLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="flex items-center justify-between border-b border-border pb-3 transition-colors hover:text-accent">
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="surface flex items-center justify-between gap-4 transition-colors hover:text-accent"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary/70">
                    <Mail className="h-5 w-5" />
                  </span>
                  <p className="text-lg text-foreground">Email</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>

              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                className="surface flex items-center justify-between gap-4 transition-colors hover:text-accent"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/35 bg-[#25D366]/12 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <p className="text-lg text-foreground">WhatsApp</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </PageFade>
  )
}
