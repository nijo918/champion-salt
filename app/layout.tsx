import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nijo918.github.io/champion-salt'),
  title: 'Champion Salt - Quality in Every Crystal.',
  description:
    "Champion Salt is Zimbabwe's premier sea salt producer, delivering premium natural salt for retail, industrial, hospitality, and export markets.",
  keywords: [
    'Champion Salt',
    'Zimbabwe salt',
    'premium sea salt',
    'natural salt',
    'industrial salt',
    'table salt Zimbabwe',
    'export salt',
    'bulk salt supply',
  ],
  authors: [{ name: 'Champion Salt Zimbabwe' }],
  creator: 'Champion Salt',
  publisher: 'Champion Salt Zimbabwe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nijo918.github.io/champion-salt',
    siteName: 'Champion Salt',
    title: 'Champion Salt - Quality in Every Crystal.',
    description:
      "Zimbabwe's premium sea salt producer for homes, industries, hospitality, and export markets.",
    images: [
      {
        url: '/champion-salt/assets/hero-salt-production.jpeg',
        width: 1200,
        height: 630,
        alt: 'Champion Salt harvest scene',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Champion Salt - Quality in Every Crystal.',
    description: "Zimbabwe's premium sea salt producer.",
    images: ['/champion-salt/assets/hero-salt-production.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/champion-salt/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/champion-salt/manifest.json" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
