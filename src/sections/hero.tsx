type HeroProps = {
  title: string
  description: string
}

export function Hero({ description, title }: HeroProps) {
  return (
    <section className="container min-h-[20lvh] flex flex-col justify-center gap-y-4 my-7">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground font-sm">{description}</p>
    </section>
  )
}
