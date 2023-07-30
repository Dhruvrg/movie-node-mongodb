import './globals.css'
import { Inter } from 'next/font/google'
// import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie',
  description: 'Created with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Navbar /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
