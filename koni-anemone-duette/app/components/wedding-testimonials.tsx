
'use client'

import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

export default function WeddingTestimonials() {
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

  const testimonials = [
    {
      name: "Emma & James Thompson",
      location: "Dallas, TX",
      venue: "Nasher Sculpture Center",
      package: "Luxe Package",
      text: "Koni transformed our vision into reality beyond our wildest dreams. The florals at the Nasher were absolutely breathtaking. Every guest commented on how stunning everything looked.",
      rating: 5
    },
    {
      name: "Maria & Carlos Gonzalez", 
      location: "Fort Worth, TX",
      venue: "Southfork Ranch",
      package: "Classic Package",
      text: "Working with Anemone Duette was the best decision we made for our wedding. Professional, creative, and the arrangements were gorgeous. Worth every penny!",
      rating: 5
    },
    {
      name: "Ashley & Michael Kim",
      location: "Frisco, TX", 
      venue: "Private Garden",
      package: "Petite Package",
      text: "Even with our smaller budget, Koni created magic. The petite package was perfect for our intimate ceremony and the quality was exceptional.",
      rating: 5
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-accent/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Real <span className="text-accent">Wedding Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from couples who trusted us with their special day across 
            the Dallas-Fort Worth metroplex.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-8 glow-accent hover:scale-105 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex justify-start mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-current" />
                ))}
              </div>

              <div className="border-t border-border/50 pt-4">
                <div className="font-caps text-accent mb-1">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mb-1">{testimonial.location}</div>
                <div className="text-xs text-muted-foreground">{testimonial.venue} • {testimonial.package}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
