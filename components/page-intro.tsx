type PageIntroProps = {
  eyebrow?: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <p className="meta-text">{eyebrow}</p> : null}
      <h1 className="font-display text-5xl leading-none text-foreground sm:text-6xl">{title}</h1>
      <p className="text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  )
}
