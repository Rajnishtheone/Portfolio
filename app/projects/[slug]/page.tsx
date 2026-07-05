import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"

import { PageFade } from "@/components/page-fade"
import { Reveal } from "@/components/reveal"
import { TagList } from "@/components/tag-list"
import { getCaseStudyProjects, getProjectBySlug } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"

type ProjectCaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getCaseStudyProjects().map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project || !project.caseStudy) {
    return buildMetadata({
      title: "Project Not Found",
      pathname: `/projects/${slug}`,
    })
  }

  return buildMetadata({
    title: `${project.title} Case Study`,
    description: project.summary,
    pathname: `/projects/${project.slug}`,
  })
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project || !project.caseStudy) {
    notFound()
  }

  return (
    <PageFade>
      <div className="page-frame">
        <section className="page-section space-y-10">
          <Reveal className="space-y-6">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <div className="space-y-4">
              <p className="meta-text">Case Study</p>
              <h1 className="font-display text-6xl leading-none text-foreground sm:text-7xl">{project.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{project.caseStudy.intro}</p>
            </div>
            <TagList tags={project.tags} />
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              {project.codeHref ? (
                <Link href={project.codeHref} className="inline-flex items-center gap-1 transition-colors hover:text-accent">
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
              {project.liveHref ? (
                <Link href={project.liveHref} className="inline-flex items-center gap-1 transition-colors hover:text-accent">
                  Live
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </Reveal>

          <div className="grid gap-8">
            {project.caseStudy.sections.map((section, index) => (
              <Reveal key={section.title} className="surface space-y-4" delay={index * 0.04}>
                <p className="meta-text">{section.title}</p>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
            <Reveal className="surface space-y-3">
              <p className="meta-text">Outcome</p>
              <p className="text-lg leading-8 text-foreground">{project.caseStudy.outcome}</p>
            </Reveal>
          </div>
        </section>
      </div>
    </PageFade>
  )
}
