
'use client'

import { useEffect, useRef } from 'react'
import { Calendar, Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactHero() {
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Koni',
      description: '(214) 532-1454',
      action: 'tel:+12145321454',
      cta: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Direct',
      description: 'anemoneduette@gmail.com',
      action: 'mailto:anemoneduette@gmail.com',
      cta: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses',
      action: 'https://wa.me/12145321454',
      cta: 'Chat Now'
    },
    {
      icon: Calendar,
      title: 'Book Online',
      description: 'Schedule consultation',
      action: '#booking-form',
      cta: 'Book Now'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Let's Create Something <span className="text-accent">Beautiful</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to discuss your wedding florals? Book a consultation with Koni to explore 
            your vision and create the perfect floral experience for your special day. 
            Serving the entire Dallas-Fort Worth metroplex and beyond.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Richardson, TX 75080</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>Mon-Fri 9AM-6PM</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div 
                key={index}
                className="animate-on-scroll text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-accent hover:scale-105 transition-all duration-300 group"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-caps text-lg mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="min-h-[40px] group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined}>
                    {method.cta}
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Quick Info */}
        <div className="animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-caps text-accent mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent requests, please call or WhatsApp.
                </p>
              </div>
              <div>
                <h3 className="font-caps text-accent mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Initial consultations are complimentary and can be conducted 
                  in-person, virtually, or by phone.
                </p>
              </div>
              <div>
                <h3 className="font-caps text-accent mb-2">Booking Timeline</h3>
                <p className="text-sm text-muted-foreground">
                  We recommend booking 6-12 months in advance for weddings, 
                  though we can accommodate shorter timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
