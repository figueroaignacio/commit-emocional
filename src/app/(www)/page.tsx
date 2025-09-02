// Sections
import { Features } from '@/sections/features'
import { Hero } from '@/sections/hero'

export default function HomePage() {
  return (
    <>
      <Hero
        description="Qué se yo… soy un pibe que piensa demasiado y escribe cuando el caos mental aprieta. Bienvenido a donde nada está del todo claro, pero algo siempre sale."
        title="Bienvenido a mi espacio personal"
      />
      <Features />
    </>
  )
}
