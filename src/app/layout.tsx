import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maître Marie Elgart — Avocate à Bordeaux',
  description: 'Cabinet de Maître Marie Elgart, avocate au Barreau de Bordeaux. Baux d\'entreprise, droit des sociétés, M&A, droit des contrats, droit international des affaires.',
  keywords: 'avocat Bordeaux, baux commerciaux, droit des sociétés, M&A, private equity, droit des affaires, Marie Elgart',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
