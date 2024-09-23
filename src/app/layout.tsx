import './globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Devtrails Protfolio',
  description: 'A portfolio site',
  generator: 'Next.js',
  applicationName: 'DevTrails Protfolio - Ricardo Granvilla',
  category: 'development',
  keywords: [
    'portfolio',
    'developer',
    'web',
    'mobile',
    'apps',
    'fullstack',
    'react',
    'nextjs',
    'tailwindcss',
    'typescript',
  ],
  authors: [
    {
      name: 'Ricardo Granvilla Oliveira',
      url: 'https://portfolio.devtrails.com.br/',
    },
  ],
  creator: 'Ricardo Granvilla Oliveira',
  publisher: 'Ricardo Granvilla Oliveira',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
