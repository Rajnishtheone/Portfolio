import type { MetadataRoute } from "next"

import { getCaseStudyProjects } from "@/lib/content"
import { metadataBase } from "@/lib/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = metadataBase.toString().replace(/\/$/, "")

  const staticRoutes = ["", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const caseStudies = getCaseStudyProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...caseStudies]
}
