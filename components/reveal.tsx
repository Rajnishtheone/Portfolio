"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { PropsWithChildren, ReactNode } from "react"

import { cn } from "@/lib/utils"

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  children: ReactNode
}>

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.32, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
