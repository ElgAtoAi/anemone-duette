import { createEffect, useRef } from 'solid-js'
import { Button } from '@/components/ui/button'
import { Play, Clock, ArrowRight } from 'lucide-solid'

export default function BlogFeatured() {
  let sectionRef: HTMLElement | undefined

  createEffect(() => {
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

    const section = sectionRef
    if (section) {
      const elements = section.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  })

  const featuredPost = {
    title: 'How to Choose the Perfect Wedding Florist in Dallas-Fort Worth',
    excerpt: 'Planning a wedding in the DFW metroplex? Learn the essential questions to ask, red flags to avoid, and how to find a florist who understands your vision and budget.',
    readTime: '8 min read',
    category: 'Wedding Planning',
    image: 'https://files.ekmcdn.com/01edb7/resources/design/ban2.jpg',
    videoId: 'dQw4w9WgXcQ', // YouTube video ID
    questions: [
      'What should I ask potential wedding florists?',
      'How far in advance should I book my florist?',
      'What\'s included in wedding flower packages?',
      'How much should I budget for wedding florals?'
    ]
  }

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-muted/20"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Featured <span class="text-accent">Guide</span>
          </h2>
          <p class="text-lg text-muted-foreground">
            Our most comprehensive guide to choosing wedding florals in Texas
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image */}
          <div class="animate-on-scroll">
            <div class="relative aspect-video rounded-lg overflow-hidden glow-accent group cursor-pointer">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                class="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Video overlay */}
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div class="bg-accent/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play class="h-8 w-8 text-accent-foreground ml-1" />
                </div>
              </div>

              {/* Category badge */}
              <div class="absolute top-4 left-4">
                <span class="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-caps">
                  {featuredPost.category}
                </span>
              </div>

              {/* Duration */}
              <div class="absolute bottom-4 right-4">
                <div class="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-sm flex items-center space-x-1">
                  <Clock class="h-3 w-3" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div class="animate-on-scroll">
            <h3 class="font-deco text-2xl lg:text-3xl mb-6">{featuredPost.title}</h3>
            <p class="text-muted-foreground mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            {/* Questions covered */}
            <div class="mb-8">
              <h4 class="font-caps text-accent mb-4">Questions Answered:</h4>
              <ul class="space-y-2">
                {featuredPost.questions.map((question, index) => (
                  <li key={index} class="flex items-start space-x-2 text-sm">
                    <span class="text-accent mt-1">•</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div class="flex flex-col sm:flex-row gap-4">
              <Button variant="glow" size="lg" class="min-h-[48px] flex items-center gap-2">
                <Play class="h-4 w-4" />
                Watch Video Guide
              </Button>
              <Button variant="outline" size="lg" class="min-h-[48px] flex items-center gap-2">
                Read Full Article
                <ArrowRight class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}