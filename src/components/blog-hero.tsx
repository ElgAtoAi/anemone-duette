import { createEffect, onCleanup } from 'solid-js'
import { Youtube, BookOpen, MessageCircle } from 'lucide-solid'

export default function BlogHero() {
  let sectionRef: HTMLElement | undefined;

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

      onCleanup(() => observer.disconnect())
    }
  });

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
      class="py-20 bg-background relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-on-scroll">
          <h1 class="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
            Koni <span class="text-accent">Tips & Clips</span>
          </h1>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert wedding flower tips and advice from Dallas-Fort Worth's elite florist. 
            Learn how to choose the perfect wedding florist, budget effectively, and make 
            the most of Texas seasonal flowers for your special day.
          </p>
          <div class="text-sm font-caps text-accent mb-12">
            Practical advice • Video tutorials • Real Q&As from DFW couples
          </div>
        </div>

        {/* Features */}
        <div class="grid sm:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                class="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-6 glow-accent hover:scale-105 transition-all duration-300"
              >
                <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon class="h-8 w-8 text-accent" />
                </div>
                <h3 class="font-caps text-lg mb-2">{feature.title}</h3>
                <p class="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Popular Topics */}
        <div class="animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8">
            <h3 class="font-caps text-xl text-accent mb-6">Popular Topics</h3>
            <div class="flex flex-wrap justify-center gap-3">
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
                  class="bg-background/50 rounded-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
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