"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

type Props = {
  children: React.ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  ...props
}: Props) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
