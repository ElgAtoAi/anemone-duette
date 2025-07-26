import { createEffect, onCleanup } from 'solid-js'
import { Button } from '@/components/ui/button'
import { Award, Heart, Star } from 'lucide-solid' // Changed from lucide-react to lucide-solid

export default function AboutPreview() {
  let sectionRef: HTMLElement | undefined // SolidJS ref

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

    onCleanup(() => observer.disconnect())
  })

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-background/95" // Changed className to class
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed className to class */}
        <div class="grid lg:grid-cols-2 gap-12 items-center"> {/* Changed className to class */}
          {/* Content */}
          <div class="animate-on-scroll"> {/* Changed className to class */}
            <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6"> {/* Changed className to class */}
              Meet <span class="text-accent">Koni</span> {/* Changed className to class */}
            </h2>
            <h3 class="font-caps text-lg text-accent mb-4"> {/* Changed className to class */}
              Gabriela Concordia Falk • Elite Floral Artist
            </h3>
            <p class="text-lg text-muted-foreground mb-6 leading-relaxed"> {/* Changed className to class */}
              With over 15 years of experience creating breathtaking floral arrangements 
              for million-dollar weddings, Koni brings an artist's eye and perfectionist's 
              attention to detail to every event.
            </p>
            <p class="text-muted-foreground mb-8 leading-relaxed"> {/* Changed className to class */}
              Featured at prestigious venues including the Nasher Sculpture Center, 
              Southfork Ranch, and the George W. Bush Presidential Center, Anemone Duette 
              has become synonymous with luxury and elegance in the Dallas-Fort Worth wedding scene.
            </p>
            <Button asChild variant="glow" size="lg" class="min-h-[48px]"> {/* Changed className to class */}
              <a href="/about-koni"> {/* Changed Link from next/link to a standard <a> tag */}
                Discover Koni's Story
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div class="animate-on-scroll"> {/* Changed className to class */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8"> {/* Changed className to class */}
              <div class="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm glow-accent"> {/* Changed className to class */}
                <Award class="h-8 w-8 text-accent mx-auto mb-3" /> {/* Changed className to class */}
                <div class="font-deco text-3xl text-accent mb-2">15+</div> {/* Changed className to class */}
                <div class="text-sm font-caps">Years Experience</div> {/* Changed className to class */}
              </div>
              <div class="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm glow-accent"> {/* Changed className to class */}
                <Heart class="h-8 w-8 text-accent mx-auto mb-3" /> {/* Changed className to class */}
                <div class="font-deco text-3xl text-accent mb-2">500+</div> {/* Changed className to class */}
                <div class="text-sm font-caps">Weddings Created</div> {/* Changed className to class */}
              </div>
              <div class="text-center bg-card/50 p-6 rounded-lg backdrop-blur-sm glow-accent"> {/* Changed className to class */}
                <Star class="h-8 w-8 text-accent mx-auto mb-3" /> {/* Changed className to class */}
                <div class="font-deco text-3xl text-accent mb-2">50+</div> {/* Changed className to class */}
                <div class="text-sm font-caps">Luxury Venues</div> {/* Changed className to class */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}