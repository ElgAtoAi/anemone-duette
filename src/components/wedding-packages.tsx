'use client'

import { onMount } from 'solid-js'
import { A } from '@solidjs/router' // Assuming @solidjs/router for Link equivalent
import { Button } from '@/components/ui/button' // Assuming SolidJS compatible Button
import { Check, Flower, Heart, Star } from 'lucide-solid' // Changed to lucide-solid

export default function WeddingPackages() {
  let sectionRef: HTMLElement | undefined

  onMount(() => {
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

    if (sectionRef) {
      const elements = sectionRef.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  })

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
      class="py-20 bg-background"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div class="text-center mb-16 animate-on-scroll">
          <h1 class="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Wedding <span class="text-accent">Packages</span>
          </h1>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Three carefully crafted packages designed to bring your wedding vision to life. 
            Each includes ceremony flowers, wedding arch arrangements, centerpieces, and full delivery & setup 
            throughout the Dallas-Fort Worth metroplex.
          </p>
          <div class="text-sm font-caps text-accent">
            Serving Dallas • Fort Worth • Arlington • Frisco • Plano • McKinney • Irving • Garland
          </div>
        </div>

        {/* Packages Grid */}
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <div 
                key={index}
                class={`animate-on-scroll relative bg-card/50 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.highlighted 
                    ? 'ring-2 ring-accent glow-accent transform scale-105' 
                    : 'hover:glow-accent'
                }`}
              >
                {pkg.highlighted && (
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
                  <h3 class="font-deco text-2xl mb-2">{pkg.name}</h3>
                  <div class="font-deco text-4xl text-accent mb-2">{pkg.price}</div>
                  <p class="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <ul class="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} class="flex items-center space-x-3">
                      <Check class="h-4 w-4 text-accent flex-shrink-0" />
                      <span class="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  variant={pkg.highlighted ? "glow" : "outline"} 
                  class="w-full min-h-[48px]"
                >
                  <A href="/contact">
                    Choose {pkg.name}
                  </A>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div class="text-center animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 class="font-caps text-xl text-accent mb-4">What's Included in Every Package</h3>
            <div class="grid sm:grid-cols-3 gap-6 text-sm">
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