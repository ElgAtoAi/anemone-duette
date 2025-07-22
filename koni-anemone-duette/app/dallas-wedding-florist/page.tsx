
import WeddingPackages from '@/components/wedding-packages'
import WeddingGallery from '@/components/wedding-gallery'
import WeddingProcess from '@/components/wedding-process'
import WeddingTestimonials from '@/components/wedding-testimonials'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Florals Dallas Fort Worth",
  "description": "Custom wedding flower packages and bridal bouquets in Dallas-Fort Worth. Three tiers: Petite ($1,200), Classic ($1,650), Luxe ($1,950).",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Anemone Duette",
    "telephone": "+12145321454",
    "email": "anemoneduette@gmail.com"
  },
  "areaServed": ["Dallas", "Fort Worth", "Arlington", "Frisco", "Plano", "McKinney"],
  "offers": [
    {
      "@type": "Offer",
      "name": "Petite Wedding Package",
      "price": "1200",
      "priceCurrency": "USD",
      "description": "Perfect for intimate ceremonies up to 50 guests"
    },
    {
      "@type": "Offer", 
      "name": "Classic Wedding Package",
      "price": "1650",
      "priceCurrency": "USD",
      "description": "Complete wedding florals for 50-100 guests"
    },
    {
      "@type": "Offer",
      "name": "Luxe Wedding Package", 
      "price": "1950",
      "priceCurrency": "USD",
      "description": "Premium florals for grand celebrations 100+ guests"
    }
  ]
}

export const metadata = {
  title: 'Wedding Flower Packages | Dallas Fort Worth | Anemone Duette',
  description: 'Custom wedding flower packages and bridal bouquets in Dallas-Fort Worth. Three affordable tiers starting at $1,200. Ceremony flowers, wedding arch, centerpieces included.',
  keywords: 'wedding flower packages, affordable florist Dallas, bridal bouquet DFW, ceremony flowers, wedding arch, centerpieces, delivery and setup',
  openGraph: {
    title: 'Wedding Flower Packages | Dallas Fort Worth | Anemone Duette',
    description: 'Custom wedding flower packages and bridal bouquets in Dallas-Fort Worth starting at $1,200',
    url: 'https://anemoneduette.com/dallas-wedding-florist',
  },
}

export default function WeddingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        <WeddingPackages />
        <WeddingProcess />
        <WeddingGallery />
        <WeddingTestimonials />
      </div>
    </>
  )
}
