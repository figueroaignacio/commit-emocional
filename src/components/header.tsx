// Components
import Link from 'next/link';

const links = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Publicaciones',
    href: '/posts',
  },
];

export function Header() {
  return (
    <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="container py-6">
        <div className="flex items-center justify-end">
          {/* <div>
            <h1 className="text-2xl">COEM</h1>
          </div> */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary hover:underline transition-colors duration-150 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
