// Components
import { Logo } from '@/components/logo';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ description, title }: HeroProps) {
  return (
    <section className="min-h-[20lvh] flex flex-col justify-center gap-y-4 my-7">
      <Logo />
      <h1 className="text-4xl font-light tracking-tight  mb-2">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </section>
  );
}
