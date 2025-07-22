
'use client'

import { useEffect, useRef } from 'react'
import { Camera, Filter, Grid } from 'lucide-react'

export default function GalleryHero() {
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

  const stats = [
    { icon: Camera, number: '500+', label: 'Weddings Captured' },
    { icon: Filter, number: '50+', label: 'Luxury Venues' },
    { icon: Grid, number: '1000+', label: 'Arrangements Created' }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h1 className="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Portfolio <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of luxury floral designs for weddings, events, and subscriptions 
            throughout the Dallas-Fort Worth metroplex. Each arrangement tells a story of love, 
            celebration, and artistic vision.
          </p>
          <p className="text-sm font-caps text-accent mb-12">
            Featured venues include Nasher Sculpture Center • Southfork Ranch • Bush Presidential Center
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-accent hover:scale-105 transition-all duration-300"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="font-deco text-3xl text-accent mb-2">{stat.number}</div>
                <div className="font-caps text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Categories Preview */}
        <div className="animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8">
            <h3 className="font-caps text-xl text-accent mb-6">Browse by Category</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-background/50 rounded p-4">
                <strong>Weddings</strong>
                <p className="text-muted-foreground mt-1">Bridal bouquets, ceremony arches, centerpieces</p>
              </div>
              <div className="bg-background/50 rounded p-4">
                <strong>Events</strong>
                <p className="text-muted-foreground mt-1">Corporate galas, celebrations, special occasions</p>
              </div>
              <div className="bg-background/50 rounded p-4">
                <strong>Subscriptions</strong>
                <p className="text-muted-foreground mt-1">Monthly arrangements for homes and offices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
