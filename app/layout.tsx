import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* =======================================================
   FONTS
   ======================================================= */

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

/* =======================================================
   METADATA
   ======================================================= */

export const metadata: Metadata = {
  title: 'Vida Saudável na Universidade | Consciência Alimentar',
  description: 'Projeto de extensão acadêmico sobre hábitos alimentares de estudantes universitários e seu impacto na qualidade de vida e rendimento acadêmico.',
  keywords: ['alimentação saudável', 'universidade', 'estudantes', 'nutrição', 'projeto acadêmico'],
}

/* =======================================================
   ROOT LAYOUT
   ======================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}