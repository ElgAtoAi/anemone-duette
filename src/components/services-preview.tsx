import { createEffect } from 'solid-js'
import { Button } from '@/components/ui/button'
import { Flower, Gift, Camera } from 'lucide-solid'

export default function ServicesPreview() {
  let sectionRef: HTMLElement | undefined;

  createEffect(() => {
    if (sectionRef) {
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

      const elements = sectionRef.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }
  });

  const services = [
    {
      icon: Flower,
      title: 'Wedding Florals',
      description: 'Complete wedding packages from intimate ceremonies to grand celebrations. Three tiers available: Petite ($1,200), Classic ($1,650), and Luxe ($1,950).',
      link: '/dallas-wedding-florist',
      cta: 'View Packages'
    },
    {
      icon: Gift,
      title: 'Monthly Subscriptions',
      description: 'Bring elegance to your space with monthly flower deliveries. Three subscription tiers to match your style and budget.',
      link: '/flower-subscriptions',
      cta: 'Subscribe Now'
    },
    {
      icon: Camera,
      title: 'Event Florals',
      description: 'Corporate events, galas, and special occasions. Creating memorable floral experiences for every celebration.',
      link: '/gallery',
      cta: 'View Gallery'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-muted/20"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Our <span class="text-accent">Services</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we create floral artistry 
            that tells your unique story and elevates every moment.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                class="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-card/70 transition-all duration-300 glow-accent group"
              >
                <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon class="h-8 w-8 text-accent" />
                </div>
                <h3 class="font-caps text-xl mb-4">{service.title}</h3>
                <p class="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  class="min-h-[48px] group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  <a href={service.link}>
                    {service.cta}
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}