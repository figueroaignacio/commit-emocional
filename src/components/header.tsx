'use client';

// Hooks
import { usePathname } from 'next/navigation';

// Components
import Link from 'next/link';
import { Logo } from './logo';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/posts', label: 'Articulos' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-3 bg-background sticky top-0">
      <nav className="space-x-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm hover:text-foreground hover:underline ${
                isActive ? 'text-foreground underline' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Logo />
    </header>
  );
}
