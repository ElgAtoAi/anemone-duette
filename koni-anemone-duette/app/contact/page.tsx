
import ContactHero from '@/components/contact-hero'
import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'
import ContactMap from '@/components/contact-map'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Anemone Duette",
  "description": "Book wedding florist Dallas. Contact elite floral designer for consultations, availability, and custom quotes throughout DFW metroplex.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Anemone Duette",
    "telephone": "+12145321454",
    "email": "anemoneduette@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Richardson",
      "@dressRegion": "TX",
      "postalCode": "75080"
    }
  },
  "about": ["book wedding florist Dallas", "DFW florist availability"]
}

export const metadata = {
  title: 'Contact & Booking | Book Wedding Florist Dallas | DFW Florist Availability | Anemone Duette',
  description: 'Book your wedding florist consultation with Anemone Duette. Check availability for Dallas-Fort Worth weddings, events, and subscriptions. Phone, email, WhatsApp available.',
  keywords: 'book wedding florist Dallas, DFW florist availability, wedding consultation Richardson TX, contact elite florist',
  openGraph: {
    title: 'Contact & Booking | Book Wedding Florist Dallas | Anemone Duette',
    description: 'Book your wedding florist consultation with elite designer Koni',
    url: 'https://anemoneduette.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactMap />
      </div>
    </>
  )
}
