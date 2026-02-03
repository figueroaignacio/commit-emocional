'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/posts', label: 'Articulos' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-3 bg-background z-500 sticky top-0">
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
