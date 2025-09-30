interface CardProps {
  icon?: React.JSX.Element;
  title: string;
  description: string;
}

export function Card({ description, title, icon }: CardProps) {
  return (
    <div className="bg-card p-4 rounded-lg border border-border flex flex-col gap-y-4 w-full h-full">
      <div className="space-y-3">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
