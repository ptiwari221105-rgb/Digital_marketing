import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Mavaliy Digital Marketing | SEO & Google Ads Expert',
  description: 'Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy. Transform your online presence with Mavaliy.',
  keywords: 'digital marketing, SEO, Google Ads, Facebook Ads, social media marketing, brand strategy, email marketing, analytics',
  openGraph: {
    title: 'Mavaliy Digital Marketing | SEO & Google Ads Expert',
    description: 'Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mavaliy Digital Marketing | SEO & Google Ads Expert',
    description: 'Professional digital marketing services specializing in SEO, Google Ads, Facebook Ads, and brand strategy.',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
  )
}
