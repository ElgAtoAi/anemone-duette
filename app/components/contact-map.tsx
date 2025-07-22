
'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Navigation, ExternalLink, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactMap() {
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

  const mapUrl = "https://media-cache-ec0.pinimg.com/736x/fc/35/e5/fc35e5cfe1f654c2f1923d66625da860.jpg"
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Richardson,TX+75080"

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h3 className="font-deco text-2xl lg:text-3xl mb-6">
            Visit Our <span className="text-accent">Studio</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Richardson, Texas, we're centrally positioned 
            to serve the entire Dallas-Fort Worth metroplex efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden glow-accent bg-card/50">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anemone Duette Location - Richardson, TX"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="animate-on-scroll">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 glow-accent h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-accent" />
                <h4 className="font-caps text-lg">Studio Location</h4>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <div className="font-caps text-sm text-accent mb-1">Address</div>
                  <p className="text-muted-foreground text-sm">
                    Richardson, Texas 75080<br />
                    Dallas-Fort Worth Metroplex
                  </p>
                </div>
                
                <div>
                  <div className="font-caps text-sm text-accent mb-1">Central Location</div>
                  <p className="text-muted-foreground text-sm">
                    Perfectly positioned between Dallas and Fort Worth, 
                    providing easy access throughout the metroplex.
                  </p>
                </div>
                
                <div>
                  <div className="font-caps text-sm text-accent mb-1">Nearby Landmarks</div>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• 15 minutes from Dallas</li>
                    <li>• 30 minutes from Fort Worth</li>
                    <li>• Close to major highways</li>
                    <li>• Convenient parking available</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  asChild 
                  variant="glow" 
                  className="w-full min-h-[48px] flex items-center gap-2"
                >
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full min-h-[48px] flex items-center gap-2"
                >
                  <a href="tel:+12145321454">
                    <Phone className="h-4 w-4" />
                    Call Before Visiting
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Radius */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 lg:p-12 text-center">
            <h4 className="font-caps text-xl text-accent mb-6">Our Service Radius</h4>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-deco text-xl text-accent">30mi</span>
                </div>
                <h5 className="font-caps text-sm mb-2">Primary Service Area</h5>
                <p className="text-xs text-muted-foreground">
                  Dallas, Fort Worth, Arlington, Frisco, Plano, McKinney and surrounding cities. 
                  No additional travel fees.
                </p>
              </div>
              <div>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-deco text-xl text-accent">60mi</span>
                </div>
                <h5 className="font-caps text-sm mb-2">Extended Service Area</h5>
                <p className="text-xs text-muted-foreground">
                  Entire DFW metroplex and surrounding areas. 
                  Modest travel fee may apply.
                </p>
              </div>
              <div>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-deco text-xl text-accent">TX</span>
                </div>
                <h5 className="font-caps text-sm mb-2">Destination Weddings</h5>
                <p className="text-xs text-muted-foreground">
                  Austin and select Texas destinations available 
                  with advance booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
