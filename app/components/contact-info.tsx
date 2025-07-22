
'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Clock, Phone, Mail, Instagram, Car } from 'lucide-react'

export default function ContactInfo() {
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

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' }
  ]

  const serviceAreas = [
    'Dallas', 'Fort Worth', 'Arlington', 'Frisco', 'Plano', 'McKinney',
    'Irving', 'Garland', 'Denton', 'Lewisville', 'Richardson', 'Carrollton',
    'Flower Mound', 'Coppell', 'Allen', 'The Colony', 'Addison', 'University Park',
    'Highland Park', 'Southlake', 'Colleyville', 'Grapevine', 'Austin'
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="animate-on-scroll">
            <h3 className="font-deco text-2xl mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-caps text-sm mb-1">Studio Location</div>
                  <div className="text-muted-foreground text-sm">
                    Richardson, Texas 75080<br />
                    Dallas-Fort Worth Metroplex
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-caps text-sm mb-1">Phone</div>
                  <a 
                    href="tel:+12145321454" 
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    (214) 532-1454
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-caps text-sm mb-1">Email</div>
                  <a 
                    href="mailto:anemoneduette@gmail.com" 
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    anemoneduette@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-caps text-sm mb-1">Instagram</div>
                  <a 
                    href="https://www.instagram.com/anemoneduette" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    @anemoneduette
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Car className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-caps text-sm mb-1">Travel</div>
                  <div className="text-muted-foreground text-sm">
                    60-mile radius from Richardson<br />
                    Austin and surrounding areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="animate-on-scroll">
            <h3 className="font-deco text-2xl mb-6">Business Hours</h3>
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                  <span className="font-caps text-sm">{schedule.day}</span>
                  <span className="text-muted-foreground text-sm">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-accent/5 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-4 w-4 text-accent" />
                <span className="font-caps text-sm text-accent">Emergency Requests</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For same-day or emergency floral needs, please call directly. 
                We'll do our best to accommodate urgent requests when possible.
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="animate-on-scroll">
            <h3 className="font-deco text-2xl mb-6">Service Areas</h3>
            <p className="text-sm text-muted-foreground mb-6">
              We proudly serve couples throughout the Dallas-Fort Worth metroplex 
              and surrounding areas. Delivery and setup included in all packages.
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-muted-foreground hover:text-accent transition-colors cursor-default">
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-accent/5 rounded-lg p-6">
              <div className="font-caps text-sm text-accent mb-2">Travel Policy</div>
              <p className="text-sm text-muted-foreground">
                No additional travel fees within 30 miles of Richardson. 
                Modest travel fee may apply for venues beyond 30 miles. 
                Austin area served with advance booking.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="font-deco text-2xl text-center mb-12">
            Frequently Asked <span className="text-accent">Questions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-caps text-accent mb-2">How far in advance should I book?</h4>
              <p className="text-sm text-muted-foreground">
                We recommend booking 6-12 months in advance for weddings. However, 
                we can often accommodate shorter timelines depending on availability and season.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-caps text-accent mb-2">Do you offer payment plans?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! We offer flexible payment plans to make luxury florals accessible. 
                Discuss options during your consultation.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-caps text-accent mb-2">Can you work with my venue's restrictions?</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely. We're familiar with venue requirements throughout DFW and 
                will ensure all arrangements comply with their guidelines.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-caps text-accent mb-2">What if my event is postponed?</h4>
              <p className="text-sm text-muted-foreground">
                We understand events can change. We'll work with you to reschedule 
                and adjust arrangements as needed with advance notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
