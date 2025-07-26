import { createEffect } from 'solid-js'
import { Award, Users, Calendar } from 'lucide-solid' // Assuming lucide-solid exists or similar SolidJS icon library

export default function KoniHero() {
  let sectionRef: HTMLElement | undefined

  createEffect(() => {
    if (!sectionRef) return

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
  })

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-background relative overflow-hidden"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div class="animate-on-scroll">
            <div class="mb-6">
              <span class="font-caps text-accent text-sm">Meet the Artist</span>
            </div>
            <h1 class="font-deco text-4xl sm:text-5xl lg:text-6xl mb-6">
              Gabriela <span class="text-accent">Concordia Falk</span>
            </h1>
            <h2 class="font-caps text-xl text-muted-foreground mb-8">
              "Koni" • Elite Floral Designer • Richardson, Texas
            </h2>
            <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience creating breathtaking floral arrangements 
              for million-dollar weddings, Koni brings an artist's eye and perfectionist's 
              attention to detail to every event throughout the Dallas-Fort Worth metroplex.
            </p>

            {/* Quick Stats */}
            <div class="grid grid-cols-3 gap-6 mb-8">
              <div class="text-center">
                <div class="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar class="h-6 w-6 text-accent" />
                </div>
                <div class="font-deco text-2xl text-accent">15+</div>
                <div class="text-xs font-caps text-muted-foreground">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users class="h-6 w-6 text-accent" />
                </div>
                <div class="font-deco text-2xl text-accent">500+</div>
                <div class="text-xs font-caps text-muted-foreground">Weddings Created</div>
              </div>
              <div class="text-center">
                <div class="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award class="h-6 w-6 text-accent" />
                </div>
                <div class="font-deco text-2xl text-accent">50+</div>
                <div class="text-xs font-caps text-muted-foreground">Luxury Venues</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div class="animate-on-scroll">
            <div class="relative aspect-[3/4] rounded-lg overflow-hidden glow-accent">
              <img
                src="https://thumbs.dreamstime.com/b/smiling-mature-woman-florist-flower-shop-small-business-owner-shallow-focus-30727277.jpg"
                alt="Gabriela Concordia Falk (Koni) - Elite floral designer at Anemone Duette in Richardson, Texas"
                class="object-cover absolute inset-0 w-full h-full"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div class="absolute bottom-6 left-6 right-6">
                <div class="bg-black/50 backdrop-blur-sm rounded px-4 py-3">
                  <h3 class="text-white font-caps text-sm mb-1">Koni at Work</h3>
                  <p class="text-white/80 text-xs">Creating beautiful arrangements in her Richardson studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}