import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Mavaliy Digital Marketing | SEO & Google Ads Expert',
  description: 'Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy. Transform your online presence with Mavaliy.',
  keywords: 'digital marketing, SEO, Google Ads, Facebook Ads, social media marketing, brand strategy, email marketing, analytics',
  authors: [{ name: 'Mavaliy Digital Marketing' }],
  creator: 'Mavaliy Digital Marketing',
  publisher: 'Mavaliy Digital Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mavaliy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mavaliy Digital Marketing | SEO & Google Ads Expert',
    description: 'Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy.',
    url: 'https://mavaliy.com',
    siteName: 'Mavaliy Digital Marketing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mavaliy Digital Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mavaliy Digital Marketing | SEO & Google Ads Expert',
    description: 'Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy.',
    images: ['/og-image.jpg'],
    creator: '@mavaliy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a1a2f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mavaliy Digital Marketing",
              "url": "https://mavaliy.com",
              "logo": "https://mavaliy.com/logo.png",
              "description": "Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy.",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mavaliy",
                "https://twitter.com/mavaliy",
                "https://www.instagram.com/mavaliy"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
