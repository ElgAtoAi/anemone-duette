
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WeddingGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

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

    // Auto-advance gallery
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % weddingImages.length)
    }, 4000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [weddingImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % weddingImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + weddingImages.length) % weddingImages.length)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background/95"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Wedding <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real weddings from across the Dallas-Fort Worth metroplex. Each arrangement 
            is carefully crafted to reflect the couple's unique love story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Gallery */}
          <div className="animate-on-scroll">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden glow-accent group">
              <Image
                src={weddingImages[currentImage]?.src || ''}
                alt={weddingImages[currentImage]?.alt || ''}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="bg-black/50 border-white/30 text-white hover:bg-black/70"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="bg-black/50 border-white/30 text-white hover:bg-black/70"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded px-3 py-2">
                  <h3 className="text-white font-caps text-sm">{weddingImages[currentImage]?.title}</h3>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {weddingImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative flex-shrink-0 w-20 h-16 rounded overflow-hidden transition-all ${
                    index === currentImage 
                      ? 'ring-2 ring-accent opacity-100' 
                      : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <h3 className="font-deco text-2xl mb-6">
              Creating <span className="text-accent">Unforgettable</span> Moments
            </h3>
            <div className="space-y-4 text-muted-foreground">
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

            <div className="mt-8">
              <Button asChild variant="glow" size="lg" className="min-h-[48px]">
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
