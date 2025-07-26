import { createEffect, createSignal, onCleanup } from 'solid-js'
import { Star, Quote } from 'lucide-solid'

export default function TestimonialsSection() {
  let sectionRef: HTMLElement | undefined
  const [currentTestimonial, setCurrentTestimonial] = createSignal(0)

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Dallas, TX",
      text: "Koni exceeded every expectation. Our wedding at the Nasher was absolutely magical, and the florals were the centerpiece that brought everything together. Worth every penny!",
      rating: 5,
      venue: "Nasher Sculpture Center"
    },
    {
      name: "Jennifer Rodriguez",
      location: "Fort Worth, TX",
      text: "The attention to detail was incredible. Koni understood our vision perfectly and created arrangements that were even more beautiful than we imagined. Professional and artistic.",
      rating: 5,
      venue: "Southfork Ranch"
    },
    {
      name: "Amanda & David Park",
      location: "Frisco, TX",
      text: "From our first consultation to the wedding day, Koni was amazing. The floral subscriptions leading up to our wedding helped us get excited for the big day. Highly recommend!",
      rating: 5,
      venue: "Private Estate"
    }
  ]

  const testimonial = () => testimonials[currentTestimonial()]

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

    if (sectionRef) {
      const elements = sectionRef.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    onCleanup(() => {
      observer.disconnect()
      clearInterval(interval)
    })
  })

  return (
    <section
      ref={sectionRef}
      class="py-20 bg-background/95"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            What Our <span class="text-accent">Couples Say</span>
          </h2>
          <p class="text-lg text-muted-foreground mb-12">
            Real stories from real weddings across the Dallas-Fort Worth metroplex
          </p>
        </div>

        <div class="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 glow-accent">
          <Quote class="h-12 w-12 text-accent mx-auto mb-6" />

          <blockquote class="text-lg lg:text-xl text-foreground mb-6 leading-relaxed font-medium">
            "{testimonial()?.text}"
          </blockquote>

          <div class="flex justify-center mb-4">
            {Array.from({ length: testimonial()?.rating || 5 }).map((_, i) => (
              <Star key={i} class="h-5 w-5 text-accent fill-current" />
            ))}
          </div>

          <div class="font-caps text-accent mb-1">{testimonial()?.name}</div>
          <div class="text-sm text-muted-foreground">{testimonial()?.location} • {testimonial()?.venue}</div>
        </div>

        {/* Testimonial Indicators */}
        <div class="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              class={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial() ? 'bg-accent' : 'bg-muted'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}