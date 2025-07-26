import { createSignal, createEffect } from 'solid-js'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WeddingGallery() {
  let sectionRef: HTMLElement | undefined
  const [currentImage, setCurrentImage] = createSignal(0)

  const weddingImages = [
    {
      src: "https://i.pinimg.com/originals/45/92/75/4592751bbdc46728512584fcf8bbf983.jpg",
      alt: "Elegant white rose bridal bouquet at Dallas wedding ceremony",
      title: "Classic Bridal Bouquet"
    },
    {
      src: "https://thumbs.dreamstime.com/b/elegant-outdoor-wedding-ceremony-white-flowers-greenery-arch-draped-fabric-elegant-outdoor-wedding-ceremony-white-flowers-greenery-348736747.jpg",
      alt: "Wedding ceremony arch with white florals at Fort Worth venue",
      title: "Ceremony Arch Design"
    },
    {
      src: "https://i.pinimg.com/originals/28/cb/a5/28cba53898880e30821e2cfa5449c62d.jpg",
      alt: "Romantic wedding centerpiece with roses and candles at Dallas reception",
      title: "Reception Centerpiece"
    },
    {
      src: "https://i.pinimg.com/originals/48/2a/52/482a52c86d0783e3d6cf90ea6fb11905.jpg",
      alt: "Bridesmaids bouquets in soft pink and white at DFW wedding",
      title: "Bridesmaids Bouquets"
    },
    {
      src: "https://thumbs.dreamstime.com/b/luxurious-wedding-reception-decor-candles-flowers-table-setting-floral-arrangements-candlelight-ai-generated-308380253.jpg",
      alt: "Luxury wedding reception table setting at Nasher Sculpture Center",
      title: "Reception Table Design"
    },
    {
      src: "https://i.pinimg.com/originals/de/c3/ac/dec3ac17cf8f0af9afeb051c112da899.jpg",
      alt: "Groom boutonniere with white rose at Fort Worth wedding",
      title: "Boutonniere Design"
    }
  ]

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

    // Auto-advance gallery
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % weddingImages.length)
    }, 4000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  })

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % weddingImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + weddingImages.length) % weddingImages.length)
  }

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-background/95"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Wedding <span class="text-accent">Gallery</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real weddings from across the Dallas-Fort Worth metroplex. Each arrangement 
            is carefully crafted to reflect the couple's unique love story.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Gallery */}
          <div class="animate-on-scroll">
            <div class="relative aspect-[4/3] rounded-lg overflow-hidden glow-accent group">
              <img
                src={weddingImages[currentImage()]?.src || ''}
                alt={weddingImages[currentImage()]?.alt || ''}
                class="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Navigation */}
              <div class="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  class="bg-black/50 border-white/30 text-white hover:bg-black/70"
                >
                  <ChevronLeft class="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  class="bg-black/50 border-white/30 text-white hover:bg-black/70"
                >
                  <ChevronRight class="h-4 w-4" />
                </Button>
              </div>

              {/* Title overlay */}
              <div class="absolute bottom-4 left-4 right-4">
                <div class="bg-black/50 backdrop-blur-sm rounded px-3 py-2">
                  <h3 class="text-white font-caps text-sm">{weddingImages[currentImage()]?.title}</h3>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div class="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {weddingImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  class={`relative flex-shrink-0 w-20 h-16 rounded overflow-hidden transition-all ${
                    index === currentImage() 
                      ? 'ring-2 ring-accent opacity-100' 
                      : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    class="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div class="animate-on-scroll">
            <h3 class="font-deco text-2xl mb-6">
              Creating <span class="text-accent">Unforgettable</span> Moments
            </h3>
            <div class="space-y-4 text-muted-foreground">
              <p>
                Every wedding tells a unique story, and our florals are designed to enhance 
                that narrative. From intimate garden ceremonies to grand ballroom receptions, 
                we create arrangements that capture the essence of your love.
              </p>
              <p>
                Featured venues include the prestigious Nasher Sculpture Center, 
                historic Southfork Ranch, Bush Presidential Center, and countless 
                beautiful locations throughout Dallas, Fort Worth, and surrounding areas.
              </p>
              <p>
                Each image represents not just beautiful flowers, but the culmination of 
                careful planning, artistic vision, and attention to every detail that makes 
                your wedding day perfect.
              </p>
            </div>

            <div class="mt-8">
              <Button asChild variant="glow" size="lg" class="min-h-[48px]">
                <a href="/contact">
                  Start Planning Your Wedding
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}