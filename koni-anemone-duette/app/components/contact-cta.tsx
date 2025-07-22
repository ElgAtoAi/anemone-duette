
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Phone, Mail, MessageCircle } from 'lucide-react'

export default function ContactCTA() {
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-accent/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Ready to Create Something <span className="text-accent">Beautiful?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create the perfect floral experience for your special day. 
            Serving the entire Dallas-Fort Worth metroplex and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-on-scroll">
          <Button 
            asChild 
            variant="glow" 
            size="lg"
            className="min-h-[48px] flex items-center gap-2"
          >
            <Link href="/contact">
              <Calendar className="h-4 w-4" />
              Book Consultation
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="min-h-[48px] flex items-center gap-2 hover:border-accent hover:text-accent"
          >
            <a href="tel:+12145321454">
              <Phone className="h-4 w-4" />
              (214) 532-1454
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="min-h-[48px] flex items-center gap-2 hover:border-accent hover:text-accent"
          >
            <a href="mailto:anemoneduette@gmail.com">
              <Mail className="h-4 w-4" />
              Email Koni
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="min-h-[48px] flex items-center gap-2 hover:border-accent hover:text-accent"
          >
            <a href="https://wa.me/12145321454" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="animate-on-scroll">
          <p className="text-sm font-caps text-accent mb-2">Available for Consultations</p>
          <p className="text-muted-foreground">
            Monday - Friday: 9 AM - 6 PM • Saturday: 10 AM - 4 PM • Sunday: By Appointment
          </p>
        </div>
      </div>
    </section>
  )
}
