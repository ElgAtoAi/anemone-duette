
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SubscriptionGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentCategory, setCurrentCategory] = useState(0)

  const categories = [
    {
      name: 'Simple Joy',
      images: [
        {
          src: "https://i.pinimg.com/originals/2d/f6/b1/2df6b116ca3b4aedf9c0e68e4eb046d2.jpg",
          alt: "Simple Joy subscription - white tulips in modern glass vase"
        },
        {
          src: "https://i.pinimg.com/originals/d9/1a/25/d91a251ea28a8b846e5db268c3b06445.jpg",
          alt: "Simple Joy subscription - seasonal sunflower arrangement"
        },
        {
          src: "https://i.pinimg.com/originals/fa/42/4c/fa424cdcb0d0742064e7a516b98a2413.jpg",
          alt: "Simple Joy subscription - minimalist pink roses"
        }
      ]
    },
    {
      name: 'Home Statement',
      images: [
        {
          src: "https://i.pinimg.com/originals/af/19/ab/af19ab2184197403d23bf8e01b35df9b.jpg",
          alt: "Home Statement subscription - elegant mixed florals with greenery"
        },
        {
          src: "https://i.pinimg.com/originals/ca/20/ff/ca20ff10d10c9c3055108b7f6a05b6f1.jpg",
          alt: "Home Statement subscription - luxury peonies and roses"
        },
        {
          src: "https://i.pinimg.com/originals/2d/46/b5/2d46b56fb07ea9042afc33e250ce54ef.jpg",
          alt: "Home Statement subscription - seasonal hydrangeas"
        }
      ]
    },
    {
      name: 'Floral Muse',
      images: [
        {
          src: "https://i.pinimg.com/originals/97/dc/21/97dc217f7048ab019f7f6ad1bf44b800.jpg",
          alt: "Floral Muse subscription - luxury orchids in premium vessel"
        },
        {
          src: "https://i.pinimg.com/originals/fa/3c/e8/fa3ce8541e3e81009a9f45edcb5c707c.jpg",
          alt: "Floral Muse subscription - exotic protea and anthurium"
        },
        {
          src: "https://i.pinimg.com/originals/ea/93/d8/ea93d8407596d0c9ce64beae39f2b4f3.jpg",
          alt: "Floral Muse subscription - premium garden roses with rare blooms"
        }
      ]
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

    return () => observer.disconnect()
  }, [])

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const currentImages = categories[currentCategory]?.images || []

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background/95"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Subscription <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the beautiful arrangements our subscribers receive each month. 
            Fresh, seasonal, and always designed with love.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="flex items-center space-x-4 bg-card/50 backdrop-blur-sm rounded-lg p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevCategory}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCategory(index)}
                  className={`px-4 py-2 rounded-md text-sm font-caps transition-colors ${
                    index === currentCategory
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextCategory}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentImages.map((image, index) => (
            <div 
              key={index}
              className="animate-on-scroll group"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden glow-accent">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Current Category Info */}
        <div className="text-center animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-caps text-xl text-accent mb-4">
              {categories[currentCategory]?.name} Arrangements
            </h3>
            <p className="text-muted-foreground">
              {currentCategory === 0 && "Perfect for brightening small spaces with fresh, seasonal blooms that bring simple joy to your daily routine."}
              {currentCategory === 1 && "Elevated arrangements that make a statement in your home with designer vessels and premium flower selections."}
              {currentCategory === 2 && "Luxury florals featuring exotic blooms and rare varieties in premium vessels for the ultimate floral experience."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
