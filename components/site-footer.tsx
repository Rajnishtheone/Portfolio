import Link from "next/link"

import { siteConfig, socialLinks } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-1">
          <p className="text-foreground">{siteConfig.name}</p>
          <p>{siteConfig.availability}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
