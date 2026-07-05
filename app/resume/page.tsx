import { PageFade } from "@/components/page-fade"
import { PageIntro } from "@/components/page-intro"
import { PrintResumeButton } from "@/components/print-resume-button"
import { Reveal } from "@/components/reveal"
import { TagList } from "@/components/tag-list"
import { certifications } from "@/content/credentials"
import { experience } from "@/content/experience"
import { projects } from "@/content/projects"
import { resumeSections } from "@/content/resume"
import { siteConfig } from "@/content/site"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Resume",
  description: "Resume-ready overview for Rajnish Kumar.",
  pathname: "/resume",
})

export default function ResumePage() {
  return (
    <PageFade>
      <div className="page-frame">
        <section className="page-section space-y-10">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <PageIntro eyebrow="Resume" title="A printable version of the essentials." description={resumeSections.summary} />
            <PrintResumeButton />
          </Reveal>

          <Reveal className="surface space-y-5">
            <div className="space-y-1">
              <h2 className="text-3xl text-foreground">{siteConfig.name}</h2>
              <p className="text-muted-foreground">{siteConfig.summary}</p>
            </div>
            <TagList tags={resumeSections.focusAreas} />
            <ul className="space-y-3 text-muted-foreground">
              {resumeSections.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-2">
            <section className="surface space-y-4">
              <p className="meta-text">Experience</p>
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="space-y-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl text-foreground">
                    {item.role} - {item.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.dates} | {item.location}
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
                </article>
              ))}
            </section>

            <section className="surface space-y-4">
              <p className="meta-text">Selected Projects</p>
              {projects.slice(0, 4).map((project) => (
                <article key={project.slug} className="space-y-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl text-foreground">{project.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                </article>
              ))}
            </section>
          </Reveal>

          <Reveal className="surface space-y-4">
            <p className="meta-text">Certifications</p>
            <ul className="grid gap-3 text-muted-foreground sm:grid-cols-2">
              {certifications.map((item) => (
                <li key={`${item.issuer}-${item.title}`}>
                  {item.title} | {item.issuer} | {item.date}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </div>
    </PageFade>
  )
}
