import type { Metadata } from "next"

import { siteConfig } from "@/content/site"

const siteUrl = siteConfig.siteUrl.startsWith("http")
  ? siteConfig.siteUrl
  : `https://${siteConfig.siteUrl}`

export const metadataBase = new URL(siteUrl)

export function buildMetadata({
  title,
  description,
  pathname = "",
}: {
  title?: string
  description?: string
  pathname?: string
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.role}`
  const pageDescription = description ?? siteConfig.summary
  const url = new URL(pathname, metadataBase).toString()

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pathname || "/",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  }
}
