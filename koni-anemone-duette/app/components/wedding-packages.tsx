
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Flower, Heart, Star } from 'lucide-react'

export default function WeddingPackages() {
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

  const packages = [
    {
      name: 'Petite',
      price: '$1,200',
      icon: Flower,
      description: 'Perfect for intimate ceremonies up to 50 guests',
      features: [
        'Bridal bouquet',
        '2 bridesmaids bouquets', 
        '4 boutonnieres',
        '6 ceremony arrangements',
        'Basic centerpieces (4)',
        'Delivery & setup'
      ],
      highlighted: false
    },
    {
      name: 'Classic',
      price: '$1,650',
      icon: Heart,
      description: 'Complete wedding florals for 50-100 guests',
      features: [
        'Bridal bouquet',
        '4 bridesmaids bouquets',
        '6 boutonnieres', 
        '8 ceremony arrangements',
        'Premium centerpieces (8)',
        'Wedding arch florals',
        'Delivery & setup',
        'Day-of coordination'
      ],
      highlighted: true
    },
    {
      name: 'Luxe',
      price: '$1,950',
      icon: Star,
      description: 'Premium florals for grand celebrations 100+ guests',
      features: [
        'Bridal bouquet', 
        '6 bridesmaids bouquets',
        '8 boutonnieres',
        '12 ceremony arrangements',
        'Luxury centerpieces (12)',
        'Grand wedding arch',
        'Cocktail hour florals',
        'Reception entrance',
        'Full-day coordination',
        'Delivery & setup'
      ],
      highlighted: false
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Wedding <span className="text-accent">Packages</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Three carefully crafted packages designed to bring your wedding vision to life. 
            Each includes ceremony flowers, wedding arch arrangements, centerpieces, and full delivery & setup 
            throughout the Dallas-Fort Worth metroplex.
          </p>
          <div className="text-sm font-caps text-accent">
            Serving Dallas • Fort Worth • Arlington • Frisco • Plano • McKinney • Irving • Garland
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <div 
                key={index}
                className={`animate-on-scroll relative bg-card/50 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.highlighted 
                    ? 'ring-2 ring-accent glow-accent transform scale-105' 
                    : 'hover:glow-accent'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-caps">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-deco text-2xl mb-2">{pkg.name}</h3>
                  <div className="font-deco text-4xl text-accent mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  variant={pkg.highlighted ? "glow" : "outline"} 
                  className="w-full min-h-[48px]"
                >
                  <Link href="/contact">
                    Choose {pkg.name}
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-caps text-xl text-accent mb-4">What's Included in Every Package</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Consultation:</strong> Personal design session to understand your vision
              </div>
              <div>
                <strong>Fresh Flowers:</strong> Premium blooms sourced for your wedding date
              </div>
              <div>
                <strong>Setup Service:</strong> Professional delivery and arrangement at your venue
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
