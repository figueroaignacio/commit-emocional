import React from 'react'

// Styles
import '@/css/globals.css'

export const metadata = {
  description:
    'Escribo para ponerle palabras a lo que me pesa, me inspira o me transforma. Y si en el camino, le sirve a alguien más, entonces habrá valido el doble.',
  title: 'Commit Emocional',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
