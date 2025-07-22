
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MapPin, ExternalLink } from 'lucide-react'

export default function KoniVenues() {
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

  const venues = [
    {
      name: 'Nasher Sculpture Center',
      location: 'Dallas, TX',
      description: 'Modern art venue featuring contemporary floral installations',
      image: 'https://thumbs.dreamstime.com/b/elegant-wedding-ceremony-decor-modern-white-floral-arrangements-round-tables-gold-chiavari-chairs-green-garden-elegant-wedding-348757647.jpg',
      type: 'Art Museum'
    },
    {
      name: 'Southfork Ranch',
      location: 'Parker, TX',
      description: 'Historic ranch venue with rustic elegance and luxury florals',
      image: 'https://acoloredmind.com/wp-content/uploads/2023/05/Calamigos-Ranch-Weddings-The-Redwood-Room-Reception-Decoration-scaled.jpg',
      type: 'Historic Ranch'
    },
    {
      name: 'George W. Bush Presidential Center',
      location: 'Dallas, TX',
      description: 'Presidential venue featuring sophisticated floral designs',
      image: 'https://meetattexas.com/assets/images/events/_fullWidthImageTransform1x/Austin-Hotel-Wedding.jpg',
      type: 'Presidential Center'
    },
    {
      name: 'Dallas Arboretum',
      location: 'Dallas, TX',
      description: 'Botanical garden weddings with natural floral integration',
      image: 'https://www.chicagobotanic.org/sites/default/files/styles/hero/public/banner_wedding2.jpg?itok=AXzyYGqA',
      type: 'Botanical Garden'
    },
    {
      name: 'Adolphus Hotel',
      location: 'Dallas, TX',
      description: 'Historic luxury hotel with grand ballroom florals',
      image: 'https://i.pinimg.com/originals/bc/10/ef/bc10ef45b15f8709a8ccf9cee8a9f158.jpg',
      type: 'Luxury Hotel'
    },
    {
      name: 'Fort Worth Botanic Garden',
      location: 'Fort Worth, TX',
      description: 'Garden conservatory featuring seasonal floral displays',
      image: 'http://phipps.conservatory.org/assets/images/as_art_image/Events_FacilitiesOverviewPalmCt1_CREDIT-eventuresweddings.com.jpg',
      type: 'Garden Conservatory'
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
            Featured <span className="text-accent">Venues</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Koni has created stunning floral arrangements at some of the most prestigious 
            venues throughout the Dallas-Fort Worth metroplex and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden glow-accent hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative aspect-video">
                <Image
                  src={venue.image}
                  alt={`${venue.name} wedding florals by Anemone Duette`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-caps">
                    {venue.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-caps text-lg">{venue.name}</h3>
                  <ExternalLink className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-3 w-3" />
                  <span>{venue.location}</span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {venue.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Venues */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 text-center">
            <h3 className="font-caps text-xl text-accent mb-6">Additional Venue Partners</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div>Rosewood Mansion on Turtle Creek</div>
              <div>The Joule Hotel</div>
              <div>Omni Dallas Hotel</div>
              <div>The Ritz-Carlton Dallas</div>
              <div>AT&T Stadium</div>
              <div>Fair Park</div>
              <div>White Rock Lake</div>
              <div>Deep Ellum Venues</div>
              <div>Trinity River Audubon Center</div>
              <div>Fort Worth Cultural District</div>
              <div>Sundance Square</div>
              <div>Legacy West</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              ...and 30+ additional luxury venues throughout the DFW metroplex
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
