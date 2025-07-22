
'use client'

import { useEffect, useRef } from 'react'
import { UserCheck, Palette, Truck, Heart } from 'lucide-react'

export default function SubscriptionProcess() {
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

  const steps = [
    {
      icon: UserCheck,
      title: 'Choose Your Tier',
      description: 'Select the subscription level that matches your style and space. Change anytime with 48-hour notice.'
    },
    {
      icon: Palette,
      title: 'We Design',
      description: 'Our team curates seasonal arrangements using the freshest blooms and most beautiful vessels.'
    },
    {
      icon: Truck,
      title: 'Monthly Delivery',
      description: 'Receive your arrangement on your chosen delivery date throughout the DFW metroplex.'
    },
    {
      icon: Heart,
      title: 'Enjoy & Care',
      description: 'Follow our included care instructions to maximize the beauty and longevity of your flowers.'
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
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, flexible, and beautiful. Start enjoying monthly flower deliveries 
            that bring joy to your home throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={index}
                className="animate-on-scroll text-center relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/30 transform -translate-x-1/2" />
                )}
                
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 hover:glow-accent transition-all duration-300">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="h-8 w-8 text-accent" />
                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-caps text-lg mb-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-caps text-xl text-accent mb-6 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <strong>Can I pause my subscription?</strong>
                <p className="text-muted-foreground mt-1">Yes, pause anytime with 48-hour notice before your next delivery.</p>
              </div>
              <div>
                <strong>What if I'm not satisfied?</strong>
                <p className="text-muted-foreground mt-1">We guarantee fresh, beautiful arrangements or we'll make it right.</p>
              </div>
              <div>
                <strong>Do you deliver on weekends?</strong>
                <p className="text-muted-foreground mt-1">Yes, we offer flexible delivery scheduling throughout the week.</p>
              </div>
              <div>
                <strong>Can I gift a subscription?</strong>
                <p className="text-muted-foreground mt-1">Absolutely! Perfect for housewarmings, birthdays, or just because.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
