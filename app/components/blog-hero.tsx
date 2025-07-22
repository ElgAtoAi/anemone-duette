
'use client'

import { useEffect, useRef } from 'react'
import { Youtube, BookOpen, MessageCircle } from 'lucide-react'

export default function BlogHero() {
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

  const features = [
    {
      icon: Youtube,
      title: 'Video Tips',
      description: 'Short videos with practical wedding flower advice'
    },
    {
      icon: BookOpen,
      title: 'Expert Guides',
      description: 'In-depth articles on choosing wedding florals'
    },
    {
      icon: MessageCircle,
      title: 'Q&A Format',
      description: 'Real questions from real couples answered'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h1 className="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Koni <span className="text-accent">Tips & Clips</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert wedding flower tips and advice from Dallas-Fort Worth's elite florist. 
            Learn how to choose the perfect wedding florist, budget effectively, and make 
            the most of Texas seasonal flowers for your special day.
          </p>
          <div className="text-sm font-caps text-accent mb-12">
            Practical advice • Video tutorials • Real Q&As from DFW couples
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-accent hover:scale-105 transition-all duration-300"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-caps text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Popular Topics */}
        <div className="animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8">
            <h3 className="font-caps text-xl text-accent mb-6">Popular Topics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'How to Choose a Wedding Florist',
                'Texas Summer Wedding Flowers',
                'Budget Wedding Flowers Under $2K',
                'Elopement Florals',
                'Best DFW Wedding Venues',
                'Seasonal Flower Guide',
                'Bridal Bouquet Styles',
                'Centerpiece Ideas'
              ].map((topic, index) => (
                <span 
                  key={index}
                  className="bg-background/50 rounded-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
