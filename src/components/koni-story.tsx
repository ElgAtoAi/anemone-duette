import { createEffect } from 'solid-js'
import { Heart, Flower, Star, Award } from 'lucide-react'

export default function KoniStory() {
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

  const timeline = [
    {
      year: '2008',
      icon: Flower,
      title: 'The Beginning',
      description: 'Gabriela discovered her passion for floral design while studying art in Dallas, beginning her journey into the world of premium florals.'
    },
    {
      year: '2012',
      icon: Heart,
      title: 'First Million-Dollar Wedding',
      description: 'Created stunning arrangements for a high-profile wedding at Southfork Ranch, establishing her reputation in luxury floral design.'
    },
    {
      year: '2018',
      icon: Star,
      title: 'Anemone Duette Born',
      description: 'Founded Anemone Duette, combining artistic vision with business expertise to serve elite clients across the DFW metroplex.'
    },
    {
      year: '2024',
      icon: Award,
      title: 'Industry Recognition',
      description: 'Featured at prestigious venues including the Nasher Sculpture Center and Bush Presidential Center, cementing her status as DFW\'s premier florist.'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-muted/20"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Koni's <span class="text-accent">Journey</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            From art student to elite floral designer, discover the passion and dedication 
            that drives every arrangement and transforms ordinary moments into extraordinary memories.
          </p>
        </div>

        {/* Timeline */}
        <div class="relative">
          {/* Timeline line */}
          <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/30 hidden lg:block" />

          <div class="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={index}
                  class={`animate-on-scroll relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  {/* Content */}
                  <div class={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-8 lg:mb-0`}>
                    <div class="bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-accent hover:scale-105 transition-all duration-300">
                      <div class="font-caps text-accent text-sm mb-2">{item.year}</div>
                      <h3 class="font-deco text-xl mb-3">{item.title}</h3>
                      <p class="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div class="relative z-10 bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-8 lg:mb-0">
                    <Icon class="h-8 w-8 text-accent-foreground" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div class="flex-1 hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Personal Note */}
        <div class="mt-20 animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <blockquote class="text-lg lg:text-xl text-foreground mb-6 italic leading-relaxed">
              "Every flower has a story to tell, and every wedding deserves arrangements that speak 
              to the couple's unique love. My mission is to create not just beautiful florals, 
              but meaningful experiences that couples will treasure forever."
            </blockquote>
            <div class="font-caps text-accent">— Gabriela "Koni" Concordia Falk</div>
          </div>
        </div>
      </div>
    </section>
  )
}