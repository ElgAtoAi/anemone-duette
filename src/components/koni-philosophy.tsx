import { createEffect } from 'solid-js'
import type { JSX } from 'solid-js' // Import JSX for type inference on ref
import { Button } from '@/components/ui/button'
import { Palette, Heart, Sparkles } from 'lucide-solid'

export default function KoniPhilosophy() {
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

      return () => observer.disconnect()
    }
  });

  const principles = [
    {
      icon: Palette,
      title: 'Artistic Vision',
      description: 'Every arrangement is a work of art, carefully composed to reflect beauty, balance, and the unique personality of each couple.'
    },
    {
      icon: Heart,
      title: 'Personal Connection',
      description: 'Understanding your story, style, and dreams allows me to create florals that truly represent your love and celebrate your journey.'
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'From the first consultation to the final petal placement, every detail matters in creating an unforgettable floral experience.'
    }
  ]

  return (
    <section
      ref={sectionRef as JSX.Ref<HTMLElement>}
      class="py-20 bg-background/95"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Design <span class="text-accent">Philosophy</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating meaningful floral experiences through artistry, personal connection,
            and unwavering attention to detail.
          </p>
        </div>

        {/* Philosophy Principles */}
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div
                key={index}
                class="animate-on-scroll text-center bg-card/50 backdrop-blur-sm rounded-lg p-8 hover:glow-accent transition-all duration-300"
              >
                <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon class="h-8 w-8 text-accent" />
                </div>
                <h3 class="font-caps text-xl mb-4">{principle.title}</h3>
                <p class="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Personal Statement */}
        <div class="animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8 lg:p-12 max-w-4xl mx-auto">
            <blockquote class="text-lg lg:text-xl text-center mb-8 italic leading-relaxed">
              "I believe that flowers are nature's way of celebrating love. My role is to
              translate that celebration into arrangements that capture the essence of each
              couple's unique story. Whether it's an intimate ceremony or a grand celebration,
              every wedding deserves florals that make hearts skip a beat."
            </blockquote>

            <div class="text-center border-t border-border/50 pt-8">
              <div class="font-caps text-accent mb-2">Ready to Create Something Beautiful Together?</div>
              <p class="text-muted-foreground mb-6">
                Let's discuss your vision and bring your dream wedding florals to life.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" class="min-h-[48px]">
                  <a href="/contact">
                    Schedule Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" class="min-h-[48px]">
                  <a href="/gallery">
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div class="mt-16 text-center animate-on-scroll">
          <div class="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
            <div>
              <strong>Studio Location</strong>
              <p class="text-muted-foreground mt-1">Richardson, Texas 75080</p>
            </div>
            <div>
              <strong>Service Area</strong>
              <p class="text-muted-foreground mt-1">Dallas-Fort Worth + 60 mile radius</p>
            </div>
            <div>
              <strong>Specialization</strong>
              <p class="text-muted-foreground mt-1">Luxury weddings & elite events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}