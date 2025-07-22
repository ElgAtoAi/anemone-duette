import HeroSection from '@/components/hero-section'
import AboutPreview from '@/components/about-preview'
import ServicesPreview from '@/components/services-preview'
import TestimonialsSection from '@/components/testimonials-section'
import ContactCTA from '@/components/contact-cta'

export const metadata = {
  title: 'Anemone Duette | Elite Wedding Florist | Dallas Fort Worth',
  description:
    'Elite wedding and event florist based in Richardson, TX, serving the entire Dallas–Fort Worth metroplex. Custom bridal bouquets, luxury floral design, and premium wedding flowers.',
  keywords:
    'DFW wedding florist, Dallas wedding flowers, Fort Worth florist, wedding flower packages, bridal bouquet DFW',
  openGraph: {
    title: 'Anemone Duette | Elite Wedding Florist | Dallas Fort Worth',
    description: 'Elite wedding and event florist serving Dallas-Fort Worth metroplex',
    url: 'https://anemoneduette.com',
    siteName: 'Anemone Duette',
    images: [
      {
        url: 'https://i.pinimg.com/originals/a0/6d/d7/a06dd7bd2fe690640d7e99402674a6d8.png',
        width: 1200,
        height: 630,
        alt: 'Anemone Duette Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Anemone Duette | Elite Wedding Florist | Dallas Fort Worth',
  description:
    'Elite wedding and event florist serving Dallas-Fort Worth metroplex with custom bridal bouquets and luxury floral design.',
  url: 'https://anemoneduette.com',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Anemone Duette',
    image:
      'https://i.pinimg.com/736x/e6/da/27/e6da277f2121b5e8d24f02bab802a3d6.jpg',
    priceRange: '$1200-$1950',
    servesCuisine: 'Wedding Florals',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="parallax-container">
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <TestimonialsSection />
        <ContactCTA />
      </div>
    </>
  )
}
