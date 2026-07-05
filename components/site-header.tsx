"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { navigation, siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/projects/")) {
        setActiveSection("projects")
        return
      }

      setActiveSection("")
      return
    }

    const sections = navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)
    const headerOffset = 120

    if (!sections.length) {
      return
    }

    const syncActiveSection = () => {
      let currentSection = sections[0]?.id ?? "home"

      for (const section of sections) {
        if (section.getBoundingClientRect().top - headerOffset <= 0) {
          currentSection = section.id
        }
      }

      setActiveSection(currentSection)
    }

    let ticking = false
    const handleScroll = () => {
      if (ticking) {
        return
      }

      window.requestAnimationFrame(() => {
        syncActiveSection()
        ticking = false
      })

      ticking = true
    }

    syncActiveSection()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    window.addEventListener("hashchange", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      window.removeEventListener("hashchange", handleScroll)
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl tracking-[0.14em] text-foreground">
          {siteConfig.name}
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 sm:gap-5">
            {navigation.map((item) => {
              const isActive =
                pathname === "/"
                  ? activeSection === item.sectionId
                  : pathname.startsWith("/projects/") && item.sectionId === "projects"

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors hover:text-accent",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
