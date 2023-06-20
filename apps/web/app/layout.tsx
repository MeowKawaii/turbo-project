import {Header, Footer} from "ui"

import '../styles/globals.css'

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
