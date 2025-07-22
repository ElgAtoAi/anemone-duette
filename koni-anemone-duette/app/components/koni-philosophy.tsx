
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Palette, Heart, Sparkles } from 'lucide-react'

export default function KoniPhilosophy() {
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

  const principles = [
    {
      icon: Palette,
      title: 'Artistic Vision',
      description: 'Every arrangement is a work of art, carefully composed to reflect beauty, balance, and the unique personality of each couple.'
    },
    {
      icon: Heart,
      title: 'Personal Connection',
      description: 'Understanding your story, style, and dreams allows me to create florals that truly represent your love and celebrate your journey.'
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'From the first consultation to the final petal placement, every detail matters in creating an unforgettable floral experience.'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background/95"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Design <span className="text-accent">Philosophy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating meaningful floral experiences through artistry, personal connection, 
            and unwavering attention to detail.
          </p>
        </div>

        {/* Philosophy Principles */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div 
                key={index}
                className="animate-on-scroll text-center bg-card/50 backdrop-blur-sm rounded-lg p-8 hover:glow-accent transition-all duration-300"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-caps text-xl mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Personal Statement */}
        <div className="animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 lg:p-12 max-w-4xl mx-auto">
            <blockquote className="text-lg lg:text-xl text-center mb-8 italic leading-relaxed">
              "I believe that flowers are nature's way of celebrating love. My role is to 
              translate that celebration into arrangements that capture the essence of each 
              couple's unique story. Whether it's an intimate ceremony or a grand celebration, 
              every wedding deserves florals that make hearts skip a beat."
            </blockquote>
            
            <div className="text-center border-t border-border/50 pt-8">
              <div className="font-caps text-accent mb-2">Ready to Create Something Beautiful Together?</div>
              <p className="text-muted-foreground mb-6">
                Let's discuss your vision and bring your dream wedding florals to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="min-h-[48px]">
                  <Link href="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px]">
                  <Link href="/gallery">
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
            <div>
              <strong>Studio Location</strong>
              <p className="text-muted-foreground mt-1">Richardson, Texas 75080</p>
            </div>
            <div>
              <strong>Service Area</strong>
              <p className="text-muted-foreground mt-1">Dallas-Fort Worth + 60 mile radius</p>
            </div>
            <div>
              <strong>Specialization</strong>
              <p className="text-muted-foreground mt-1">Luxury weddings & elite events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
