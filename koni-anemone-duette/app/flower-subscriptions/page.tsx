
import SubscriptionTiers from '@/components/subscription-tiers'
import SubscriptionProcess from '@/components/subscription-process'
import SubscriptionGallery from '@/components/subscription-gallery'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Monthly Flower Subscription Dallas",
  "description": "Monthly flower subscription service in Dallas-Fort Worth. Three tiers: Simple Joy, Home Statement, Floral Muse. Bring elegance to your space each month.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Anemone Duette",
    "telephone": "+12145321454",
    "email": "anemoneduette@gmail.com"
  },
  "areaServed": ["Dallas", "Fort Worth", "Arlington", "Frisco", "Plano", "McKinney", "Irving", "Garland"],
  "offers": [
    {
      "@type": "Offer",
      "name": "Simple Joy Subscription",
      "description": "Monthly fresh blooms for your home"
    },
    {
      "@type": "Offer",
      "name": "Home Statement Subscription", 
      "description": "Elevated arrangements for discerning tastes"
    },
    {
      "@type": "Offer",
      "name": "Floral Muse Subscription",
      "description": "Premium luxury florals for ultimate elegance"
    }
  ]
}

export const metadata = {
  title: 'Monthly Flower Subscription Dallas | Home Floral Delivery DFW | Anemone Duette',
  description: 'Monthly flower subscription service in Dallas-Fort Worth. Three elegant tiers to bring beauty to your home. ZIP code-based delivery throughout DFW metroplex.',
  keywords: 'monthly flower subscription Dallas, home floral delivery DFW, flower delivery service, subscription flowers Texas',
  openGraph: {
    title: 'Monthly Flower Subscription Dallas | Anemone Duette',
    description: 'Monthly flower subscription service bringing elegance to your space each month',
    url: 'https://anemoneduette.com/flower-subscriptions',
  },
}

export default function SubscriptionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        <SubscriptionTiers />
        <SubscriptionProcess />
        <SubscriptionGallery />
      </div>
    </>
  )
}
