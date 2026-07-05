import Link from "next/link"

import { PageFade } from "@/components/page-fade"

export default function NotFound() {
  return (
    <PageFade>
      <div className="page-frame">
        <section className="page-section">
          <div className="surface max-w-2xl space-y-5">
            <p className="meta-text">404</p>
            <h1 className="font-display text-6xl leading-none text-foreground">That page isn&apos;t here.</h1>
            <p className="text-lg leading-8 text-muted-foreground">
              The route may have changed, or it may not be published yet. The main sections below are all live.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <Link href="/#projects" className="transition-colors hover:text-accent">
                Projects
              </Link>
              <Link href="/#contact" className="transition-colors hover:text-accent">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageFade>
  )
}
