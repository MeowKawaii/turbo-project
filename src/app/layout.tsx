import { Inter } from 'next/font/google'

import Header from '~/components/Header'
import './globals.css'
import Footer from '~/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ant Design - pro',
  description: 'Ant Design - pro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
