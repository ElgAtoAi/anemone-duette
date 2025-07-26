import { createEffect } from 'solid-js'
import { Camera, Filter, Grid } from 'lucide-solid'

export default function GalleryHero() {
  let sectionRef: HTMLElement | undefined

  createEffect(() => {
    if (sectionRef) {
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

      const elements = sectionRef.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }
  })

  const stats = [
    { icon: Camera, number: '500+', label: 'Weddings Captured' },
    { icon: Filter, number: '50+', label: 'Luxury Venues' },
    { icon: Grid, number: '1000+', label: 'Arrangements Created' }
  ]

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-background relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-on-scroll">
          <h1 class="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Portfolio <span class="text-accent">Gallery</span>
          </h1>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of luxury floral designs for weddings, events, and subscriptions 
            throughout the Dallas-Fort Worth metroplex. Each arrangement tells a story of love, 
            celebration, and artistic vision.
          </p>
          <p class="text-sm font-caps text-accent mb-12">
            Featured venues include Nasher Sculpture Center • Southfork Ranch • Bush Presidential Center
          </p>
        </div>

        {/* Stats */}
        <div class="grid sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                class="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-accent hover:scale-105 transition-all duration-300"
              >
                <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon class="h-8 w-8 text-accent" />
                </div>
                <div class="font-deco text-3xl text-accent mb-2">{stat.number}</div>
                <div class="font-caps text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Categories Preview */}
        <div class="animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8">
            <h3 class="font-caps text-xl text-accent mb-6">Browse by Category</h3>
            <div class="grid sm:grid-cols-3 gap-4 text-sm">
              <div class="bg-background/50 rounded p-4">
                <strong>Weddings</strong>
                <p class="text-muted-foreground mt-1">Bridal bouquets, ceremony arches, centerpieces</p>
              </div>
              <div class="bg-background/50 rounded p-4">
                <strong>Events</strong>
                <p class="text-muted-foreground mt-1">Corporate galas, celebrations, special occasions</p>
              </div>
              <div class="bg-background/50 rounded p-4">
                <strong>Subscriptions</strong>
                <p class="text-muted-foreground mt-1">Monthly arrangements for homes and offices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}