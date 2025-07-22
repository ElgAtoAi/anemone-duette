
import BlogHero from '@/components/blog-hero'
import BlogGrid from '@/components/blog-grid'
import BlogFeatured from '@/components/blog-featured'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Koni Tips & Clips",
  "description": "Expert wedding flower tips and advice from Dallas-Fort Worth elite florist. Learn how to choose wedding flowers, budget tips, and seasonal advice.",
  "author": {
    "@type": "Person",
    "name": "Gabriela Concordia Falk",
    "alternateName": "Koni"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Anemone Duette"
  },
  "about": ["how to choose a wedding florist", "wedding flower tips DFW", "budget wedding flowers"]
}

export const metadata = {
  title: 'Koni Tips & Clips | Wedding Flower Tips DFW | How to Choose Wedding Florist | Anemone Duette',
  description: 'Expert wedding flower tips and advice from Dallas-Fort Worth elite florist. Learn how to choose a wedding florist, budget tips, and seasonal flower advice for Texas weddings.',
  keywords: 'how to choose a wedding florist, wedding flower tips DFW, budget wedding flowers, Texas wedding flowers, flower tips Dallas',
  openGraph: {
    title: 'Koni Tips & Clips | Wedding Flower Tips DFW | Anemone Duette',
    description: 'Expert wedding flower tips and advice from Dallas-Fort Worth elite florist',
    url: 'https://anemoneduette.com/koni-tips',
  },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        <BlogHero />
        <BlogFeatured />
        <BlogGrid />
      </div>
    </>
  )
}
