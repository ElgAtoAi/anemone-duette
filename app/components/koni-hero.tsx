
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Award, Users, Calendar } from 'lucide-react'

export default function KoniHero() {
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
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="font-caps text-accent text-sm">Meet the Artist</span>
            </div>
            <h1 className="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
              Gabriela <span className="text-accent">Concordia Falk</span>
            </h1>
            <h2 className="font-caps text-xl text-muted-foreground mb-8">
              "Koni" • Elite Floral Designer • Richardson, Texas
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience creating breathtaking floral arrangements 
              for million-dollar weddings, Koni brings an artist's eye and perfectionist's 
              attention to detail to every event throughout the Dallas-Fort Worth metroplex.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div className="font-deco text-2xl text-accent">15+</div>
                <div className="text-xs font-caps text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="font-deco text-2xl text-accent">500+</div>
                <div className="text-xs font-caps text-muted-foreground">Weddings Created</div>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="font-deco text-2xl text-accent">50+</div>
                <div className="text-xs font-caps text-muted-foreground">Luxury Venues</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden glow-accent">
              <Image
                src="https://thumbs.dreamstime.com/b/smiling-mature-woman-florist-flower-shop-small-business-owner-shallow-focus-30727277.jpg"
                alt="Gabriela Concordia Falk (Koni) - Elite floral designer at Anemone Duette in Richardson, Texas"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded px-4 py-3">
                  <h3 className="text-white font-caps text-sm mb-1">Koni at Work</h3>
                  <p className="text-white/80 text-xs">Creating beautiful arrangements in her Richardson studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
