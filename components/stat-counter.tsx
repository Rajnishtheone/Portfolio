"use client"

import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type StatCounterProps = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  note?: string
}

export function StatCounter({ value, label, prefix = "", suffix = "", note }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }

    let frame = 0
    const duration = 800
    const start = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplayValue(Math.round(progress * value))

      if (progress < 1) {
        frame = window.requestAnimationFrame(step)
      }
    }

    frame = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(frame)
  }, [isInView, value])

  return (
    <div ref={ref} className="surface space-y-3">
      <p className="font-mono text-3xl text-foreground sm:text-4xl">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <div className="space-y-1">
        <p className="text-sm text-foreground">{label}</p>
        {note ? <p className="text-sm leading-6 text-muted-foreground">{note}</p> : null}
      </div>
    </div>
  )
}
