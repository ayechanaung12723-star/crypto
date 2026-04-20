import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KAC Exchange Dashboard',
  description: 'Real-time Crypto Price Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}