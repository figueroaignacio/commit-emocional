interface PostHeaderProps {
  title: string
  description: string
}

export function PostHeader({ description, title }: PostHeaderProps) {
  return (
    <div className="container space-y-3">
      <h1 className="text-xl font-bold">{title}</h1>
      {description ? (
        <p className="text-muted-foreground border-b border-border pb-5">{description}</p>
      ) : null}
    </div>
  )
}
