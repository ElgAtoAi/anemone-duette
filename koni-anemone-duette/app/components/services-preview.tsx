
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Flower, Gift, Camera } from 'lucide-react'

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

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
      className="py-20 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we create floral artistry 
            that tells your unique story and elevates every moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-card/70 transition-all duration-300 glow-accent group"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-caps text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="min-h-[48px] group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  <Link href={service.link}>
                    {service.cta}
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
