import './globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'RGO Protfolio',
  description: 'A portfolio site',
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
