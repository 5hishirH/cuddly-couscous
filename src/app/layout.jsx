import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptopia',
  description: 'Discover full stack project with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>{children}</body>
    </html>
  )
}