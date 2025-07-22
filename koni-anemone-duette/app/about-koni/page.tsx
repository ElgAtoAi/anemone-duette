
import KoniHero from '@/components/koni-hero'
import KoniStory from '@/components/koni-story'
import KoniAchievements from '@/components/koni-achievements'
import KoniVenues from '@/components/koni-venues'
import KoniPhilosophy from '@/components/koni-philosophy'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gabriela Concordia Falk",
  "alternateName": "Koni",
  "description": "Elite floral designer with 15+ years experience creating luxury wedding florals for million-dollar events throughout Dallas-Fort Worth.",
  "jobTitle": "Elite Floral Designer",
  "worksFor": {
    "@type": "LocalBusiness", 
    "name": "Anemone Duette"
  },
  "alumniOf": "Professional Floral Design",
  "knowsAbout": ["Wedding Florals", "Event Design", "Luxury Floral Arrangements"],
  "areaServed": ["Dallas", "Fort Worth", "Texas"],
  "award": "Featured at Nasher Sculpture Center, Southfork Ranch, Bush Presidential Center"
}

export const metadata = {
  title: 'About Koni | Elite Florist Dallas | Gabriela Concordia Falk | Anemone Duette',
  description: 'Meet Koni (Gabriela Concordia Falk), elite floral designer with 15+ years experience creating luxury wedding florals for million-dollar events. Featured at Nasher, Southfork, Bush Center.',
  keywords: 'elite florist Dallas, best florist in DFW, floral designer Texas, Gabriela Concordia Falk, luxury wedding florist',
  openGraph: {
    title: 'About Koni | Elite Florist Dallas | Anemone Duette',
    description: 'Meet the artist behind Anemone Duette - 15+ years of luxury floral design',
    url: 'https://anemoneduette.com/about-koni',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        <KoniHero />
        <KoniStory />
        <KoniAchievements />
        <KoniVenues />
        <KoniPhilosophy />
      </div>
    </>
  )
}
