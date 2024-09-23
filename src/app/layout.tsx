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
  openGraph: {
    title: 'Devtrails Protfolio',
    description:
      'Pronto para levar seu projeto ao próximo nível? Juntos, podemos criar algo extraordinário que atenda às suas necessidades.',
    url: 'https://portfolio.devtrails.com.br/',
    type: 'website',
    locale: 'en_US',
    siteName: 'DevTrails Protfolio',
    images: [
      {
        url: 'https://portfolio.devtrails.com.br/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevTrails Protfolio',
      },
    ],
  },
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
