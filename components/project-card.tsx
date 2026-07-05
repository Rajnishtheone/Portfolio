import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { ProjectItem } from "@/content/types"

import { TagList } from "./tag-list"

type ProjectCardProps = {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface flex h-full flex-col gap-5">
      <div className="project-thumb">
        <div className="space-y-2">
          <p className="meta-text">{project.year}</p>
          <p className="text-xl text-foreground">{project.title}</p>
        </div>
        {project.caseStudy ? <span className="meta-chip">Case Study</span> : null}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl text-foreground">{project.title}</h2>
          <p className="leading-7 text-muted-foreground">{project.description}</p>
        </div>
        <TagList tags={project.tags} />
      </div>
      <div className="mt-auto flex flex-wrap gap-4 text-sm text-muted-foreground">
        {project.caseStudy ? (
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 transition-colors hover:text-accent">
            Read case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : null}
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
    </article>
  )
}
