"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { PropsWithChildren } from "react"

export function PageFade({ children }: PropsWithChildren) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}
