// Components
import Link from 'next/link'

const links = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Todos los articulos',
    href: '/articles',
  },
]

export function Header() {
  return (
    <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">COEM</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary hover:underline transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
