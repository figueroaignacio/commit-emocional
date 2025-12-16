// Components
import { AnimateIn } from '@/components/animate-in';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ description, title }: HeroProps) {
  return (
    <AnimateIn variant="scale">
      <section className="min-h-[20lvh] flex flex-col justify-center gap-y-4 my-7">
        <h1 className="text-4xl tracking-tight font-semibold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </section>
    </AnimateIn>
  );
}
