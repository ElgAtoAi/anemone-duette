
'use client'

import { useEffect, useRef } from 'react'
import { Calendar, MessageCircle, Flower, Truck } from 'lucide-react'

export default function WeddingProcess() {
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
      icon: Calendar,
      title: 'Initial Consultation',
      description: 'We meet to discuss your vision, venue, and budget. This personal session helps us understand your style and preferences.',
      timeline: '6-12 months before'
    },
    {
      icon: MessageCircle,
      title: 'Design & Planning',
      description: 'We create detailed proposals with mood boards, flower selections, and arrangements tailored to your wedding theme.',
      timeline: '3-6 months before'
    },
    {
      icon: Flower,
      title: 'Final Details',
      description: 'We finalize all arrangements, confirm delivery timelines, and coordinate with your venue for seamless setup.',
      timeline: '2-4 weeks before'
    },
    {
      icon: Truck,
      title: 'Delivery & Setup',
      description: 'Our team arrives early to set up all florals perfectly, ensuring everything is picture-perfect for your special day.',
      timeline: 'Wedding day'
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
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first consultation to wedding day setup, we guide you through every step 
            to ensure your floral vision becomes reality.
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
                  <h3 className="font-caps text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-xs font-caps text-accent">{step.timeline}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
