// Components
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="container min-h-[50lvh] flex flex-col justify-center gap-y-4">
      <h1 className="text-3xl font-bold">Bienvenido a mi espacio personal</h1>
      <p className="text-muted-foreground">
        Qué se yo… soy un pibe que piensa demasiado y escribe cuando el caos mental aprieta.
        Bienvenido a donde nada está del todo claro, pero algo siempre sale.
      </p>
      <Link
        href="/articles"
        className="bg-primary rounded-lg px-4 py-2 text-sm text-white w-fit hover:scale-[1.03] active:scale-[0.97] transition duration-75 flex items-center gap-x-2"
      >
        Explorar articulos <ArrowRightIcon />
      </Link>
    </section>
  )
}
