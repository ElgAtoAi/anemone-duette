
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Award, Heart, Star } from 'lucide-react'

export default function AboutPreview() {
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
      className="py-20 bg-background/95"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
              Meet <span className="text-accent">Koni</span>
            </h2>
            <h3 className="font-caps text-lg text-accent mb-4">
              Gabriela Concordia Falk • Elite Floral Artist
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience creating breathtaking floral arrangements 
              for million-dollar weddings, Koni brings an artist's eye and perfectionist's 
              attention to detail to every event.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Featured at prestigious venues including the Nasher Sculpture Center, 
              Southfork Ranch, and the George W. Bush Presidential Center, Anemone Duette 
              has become synonymous with luxury and elegance in the Dallas-Fort Worth wedding scene.
            </p>
            <Button asChild variant="glow" size="lg" className="min-h-[48px]">
              <Link href="/about-koni">
                Discover Koni's Story
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm glow-accent">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-deco text-3xl text-accent mb-2">15+</div>
                <div className="text-sm font-caps">Years Experience</div>
              </div>
              <div className="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm glow-accent">
                <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-deco text-3xl text-accent mb-2">500+</div>
                <div className="text-sm font-caps">Weddings Created</div>
              </div>
              <div className="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm glow-accent">
                <Star className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-deco text-3xl text-accent mb-2">50+</div>
                <div className="text-sm font-caps">Luxury Venues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
