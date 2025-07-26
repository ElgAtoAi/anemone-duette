import { createEffect, createSignal } from 'solid-js'
import { Button } from '@/components/ui/button'
import { Check, Flower2, Gift, Sparkles, MapPin } from 'lucide-solid' // Changed lucide-react to lucide-solid

export default function SubscriptionTiers() {
  let sectionRef: HTMLElement | undefined
  const [zipCode, setZipCode] = createSignal('')
  const [deliveryAvailable, setDeliveryAvailable] = createSignal<boolean | null>(null)

  // DFW area ZIP codes (sample - in real app would be more comprehensive)
  const serviceZipCodes = [
    '75001', '75002', '75006', '75007', '75008', '75009', '75010', '75013', '75014', '75015',
    '75016', '75017', '75019', '75020', '75021', '75022', '75023', '75024', '75025', '75026',
    '75030', '75032', '75034', '75035', '75038', '75039', '75040', '75041', '75042', '75043',
    '75048', '75050', '75051', '75052', '75054', '75056', '75057', '75060', '75061',
    '75062', '75063', '75067', '75068', '75069', '75070', '75071', '75074', '75075', '75076',
    '75077', '75078', '75080', '75081', '75082', '75083', '75085', '75086', '75087', '75088',
    '75089', '75093', '75094', '75098', '75099', '75104', '75106', '75115', '75116', '75117',
    '75118', '75119', '75120', '75121', '75123', '75124', '75125', '75126', '75127', '75132',
    '75134', '75135', '75137', '75138', '75141', '75142', '75143', '75146', '75147', '75149',
    '75150', '75152', '75154', '75156', '75157', '75159', '75160', '75161', '75163', '75164',
    '75165', '75166', '75167', '75168', '75169', '75172', '75173', '75180', '75181', '75182',
    '75183', '75184', '75185', '75186', '75187', '75201', '75202', '75203', '75204', '75205',
    '75206', '75207', '75208', '75209', '75210', '75211', '75212', '75214', '75215', '75216',
    '75217', '75218', '75219', '75220', '75221', '75222', '75223', '75224', '75225', '75226',
    '75227', '75228', '75229', '75230', '75231', '75232', '75233', '75234', '75235', '75236',
    '75237', '75238', '75240', '75241', '75243', '75244', '75246', '75247', '75248', '75249',
    '75250', '75251', '75252', '75253', '75254', '75270', '75275', '76001', '76002', '76006',
    '76010', '76011', '76012', '76013', '76014', '76015', '76016', '76017', '76018', '76019',
    '76020', '76021', '76022', '76028', '76034', '76040', '76051', '76052', '76053', '76054',
    '76092', '76101', '76102', '76103', '76104', '76105', '76106', '76107', '76108', '76109',
    '76110', '76111', '76112', '76114', '76115', '76116', '76117', '76118', '76119', '76120',
    '76121', '76122', '76123', '76126', '76127', '76129', '76130', '76131', '76132', '76133',
    '76134', '76135', '76137', '76140', '76147', '76148', '76150', '76155', '76161', '76162',
    '76163', '76164', '76177', '76179', '76180', '76182', '76185', '76191', '76192', '76196',
    '76197', '76199'
  ]

  createEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = sectionRef
    if (section) {
      const elements = section.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  })

  const handleZipCheck = () => {
    if (zipCode().length === 5) {
      setDeliveryAvailable(serviceZipCodes.includes(zipCode()))
    }
  }

  const subscriptions = [
    {
      name: 'Simple Joy',
      price: 'Starting at $45/month',
      icon: Flower2,
      description: 'Monthly fresh blooms to brighten your home',
      features: [
        'Fresh seasonal arrangement',
        'Delivered monthly',
        'Perfect for small spaces',
        'Includes care instructions',
        'Flexible scheduling'
      ],
      highlighted: false
    },
    {
      name: 'Home Statement',
      price: 'Starting at $85/month',
      icon: Gift,
      description: 'Elevated arrangements for discerning tastes',
      features: [
        'Premium seasonal blooms',
        'Designer arrangement',
        'Monthly delivery',
        'Custom vase included',
        'Personalized note',
        'Care & styling tips'
      ],
      highlighted: true
    },
    {
      name: 'Floral Muse',
      price: 'Starting at $135/month',
      icon: Sparkles,
      description: 'Premium luxury florals for ultimate elegance',
      features: [
        'Luxury seasonal arrangements',
        'Exotic & rare blooms',
        'Multiple arrangements',
        'Premium vessels',
        'Monthly delivery',
        'Personal consultation',
        'Custom design notes',
        'Priority scheduling'
      ],
      highlighted: false
    }
  ]

  return (
    <section
      ref={sectionRef}
      class="py-20 bg-background"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div class="text-center mb-16 animate-on-scroll">
          <h1 class="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Blooms by <span class="text-accent">Anemone</span>
          </h1>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Bring elegance to your space each month with our curated floral subscriptions.
            Fresh, seasonal arrangements delivered to your door throughout the Dallas-Fort Worth metroplex.
          </p>

          {/* ZIP Code Checker */}
          <div class="bg-card/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto mb-8">
            <div class="flex items-center space-x-2 mb-2">
              <MapPin class="h-4 w-4 text-accent" />
              <span class="font-caps text-sm">Check Delivery Availability</span>
            </div>
            <div class="flex space-x-2">
              <input
                type="text"
                placeholder="ZIP Code"
                value={zipCode()}
                onInput={(e) => setZipCode(e.target.value)}
                class="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm"
                maxLength={5}
              />
              <Button onClick={handleZipCheck} size="sm" variant="outline">
                Check
              </Button>
            </div>
            {deliveryAvailable() !== null && (
              <div class={`text-sm mt-2 ${deliveryAvailable() ? 'text-green-500' : 'text-red-500'}`}>
                {deliveryAvailable()
                  ? '✓ Delivery available in your area!'
                  : '✗ Currently not serving this area'}
              </div>
            )}
          </div>
        </div>

        {/* Subscription Tiers */}
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          {subscriptions.map((subscription, index) => {
            const Icon = subscription.icon
            return (
              <div
                key={index}
                class={`animate-on-scroll relative bg-card/50 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  subscription.highlighted
                    ? 'ring-2 ring-accent glow-accent transform scale-105'
                    : 'hover:glow-accent'
                }`}
              >
                {subscription.highlighted && (
                  <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span class="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-caps">
                      Most Popular
                    </span>
                  </div>
                )}

                <div class="text-center mb-6">
                  <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon class="h-8 w-8 text-accent" />
                  </div>
                  <h3 class="font-deco text-2xl mb-2">{subscription.name}</h3>
                  <div class="font-caps text-accent mb-2">{subscription.price}</div>
                  <p class="text-muted-foreground text-sm">{subscription.description}</p>
                </div>

                <ul class="space-y-3 mb-8">
                  {subscription.features.map((feature, featureIndex) => (
                    <li key={featureIndex} class="flex items-center space-x-3">
                      <Check class="h-4 w-4 text-accent flex-shrink-0" />
                      <span class="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={subscription.highlighted ? "glow" : "outline"}
                  class="w-full min-h-[48px]"
                >
                  <a href="/contact">
                    Subscribe to {subscription.name}
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div class="text-center animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 class="font-caps text-xl text-accent mb-4">Subscription Benefits</h3>
            <div class="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Flexibility:</strong> Pause, skip, or cancel anytime with 48-hour notice
              </div>
              <div>
                <strong>Fresh Guarantee:</strong> We ensure every arrangement arrives fresh and beautiful
              </div>
              <div>
                <strong>Personal Touch:</strong> Each delivery includes care tips and styling suggestions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}