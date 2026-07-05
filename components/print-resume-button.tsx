"use client"

import { Printer } from "lucide-react"

export function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:text-accent"
    >
      <Printer className="h-4 w-4" />
      Download PDF
    </button>
  )
}
