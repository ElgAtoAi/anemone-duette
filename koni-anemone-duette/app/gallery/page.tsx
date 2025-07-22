
import GalleryHero from '@/components/gallery-hero'
import GalleryFilters from '@/components/gallery-filters'
import GalleryGrid from '@/components/gallery-grid'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Anemone Duette Portfolio Gallery",
  "description": "Luxury floral design portfolio featuring weddings, events, and subscriptions throughout Dallas-Fort Worth metroplex.",
  "creator": {
    "@type": "Person",
    "name": "Gabriela Concordia Falk"
  },
  "about": ["event florist DFW", "wedding flowers Dallas", "luxury floral design"],
  "locationCreated": ["Dallas", "Fort Worth", "Texas"]
}

export const metadata = {
  title: 'Portfolio Gallery | Event Florist DFW | Luxury Floral Design | Anemone Duette',
  description: 'Browse our portfolio of luxury floral designs for weddings and events throughout Dallas-Fort Worth. Featured venues include Nasher, Southfork, Bush Center.',
  keywords: 'event florist DFW, wedding flowers Dallas, luxury floral design, portfolio gallery, Texas wedding florist',
  openGraph: {
    title: 'Portfolio Gallery | Luxury Floral Design | Anemone Duette',
    description: 'Browse our portfolio of luxury floral designs for weddings and events',
    url: 'https://anemoneduette.com/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        <GalleryHero />
        <GalleryFilters />
        <GalleryGrid />
      </div>
    </>
  )
}
