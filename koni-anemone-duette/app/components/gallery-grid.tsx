
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Eye, Heart, ExternalLink, X } from 'lucide-react'

interface GalleryGridProps {
  activeFilter?: string
}

export default function GalleryGrid({ activeFilter = 'all' }: GalleryGridProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Classic Bridal Bouquet',
      venue: 'Nasher Sculpture Center',
      image: 'https://i.pinimg.com/736x/78/e4/1b/78e41bea501752d13179555c84de1d88.jpg',
      alt: 'Classic white rose bridal bouquet at Nasher Sculpture Center wedding'
    },
    {
      id: 2,
      category: 'weddings',
      title: 'Garden Wedding Arch',
      venue: 'Dallas Arboretum',
      image: 'https://thumbs.dreamstime.com/b/romantic-garden-wedding-arch-white-flowers-red-table-ice-cream-stand-romantic-garden-wedding-arch-white-flowers-red-348749557.jpg?w=992',
      alt: 'Garden wedding ceremony arch with white florals at Dallas Arboretum'
    },
    {
      id: 3,
      category: 'subscriptions',
      title: 'Home Statement Arrangement',
      venue: 'Monthly Subscription',
      image: 'https://i.pinimg.com/originals/25/ff/ec/25ffec9c188563b159f5398741035494.jpg',
      alt: 'Home Statement subscription arrangement with peonies and designer vase'
    },
    {
      id: 4,
      category: 'events',
      title: 'Corporate Gala Centerpiece',
      venue: 'AT&T Stadium',
      image: 'https://i.pinimg.com/originals/a2/58/cf/a258cf1728b264706bf9416cefa13b8d.jpg',
      alt: 'Corporate gala centerpiece at AT&T Stadium event'
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Luxury Reception Table',
      venue: 'Bush Presidential Center',
      image: 'https://thumbs.dreamstime.com/b/luxury-elegant-wedding-reception-table-arrangement-169005749.jpg',
      alt: 'Luxury wedding reception table setting at Bush Presidential Center'
    },
    {
      id: 6,
      category: 'subscriptions',
      title: 'Floral Muse Collection',
      venue: 'Premium Subscription',
      image: 'https://i.pinimg.com/originals/48/4e/b6/484eb6312fc64700fa7d1a837749ffc5.jpg',
      alt: 'Floral Muse subscription with exotic orchids and rare blooms'
    },
    {
      id: 7,
      category: 'events',
      title: 'Art Gallery Opening',
      venue: 'Deep Ellum Gallery',
      image: 'https://thumbs.dreamstime.com/b/exploring-contemporary-art-installations-modern-gallery-evening-event-visitors-engage-striking-contemporary-333072765.jpg',
      alt: 'Contemporary floral installations at Deep Ellum art gallery opening'
    },
    {
      id: 8,
      category: 'weddings',
      title: 'Rustic Elegance',
      venue: 'Southfork Ranch',
      image: 'https://media-api.xogrp.com/images/13a378cc-45b2-450d-ad0e-f1af1110127f~rs_768.h',
      alt: 'Rustic elegant bridal bouquet at Southfork Ranch wedding'
    },
    {
      id: 9,
      category: 'subscriptions',
      title: 'Simple Joy Seasonal',
      venue: 'Home Delivery',
      image: 'https://i.pinimg.com/736x/4e/fa/8f/4efa8f0f7586b46ea4167270589dbbde.jpg',
      alt: 'Simple Joy subscription seasonal arrangement in glass vase'
    },
    {
      id: 10,
      category: 'events',
      title: 'Anniversary Celebration',
      venue: 'Rosewood Mansion',
      image: 'https://thumbs.dreamstime.com/b/elegant-floral-centerpieces-luxurious-banquet-table-327342782.jpg',
      alt: 'Anniversary celebration dinner with romantic florals at Rosewood Mansion'
    },
    {
      id: 11,
      category: 'weddings',
      title: 'Modern Minimalist',
      venue: 'The Joule Hotel',
      image: 'https://media-api.xogrp.com/images/81295076-26aa-4cf9-a3eb-859d29cab1d6~rs_768.h',
      alt: 'Modern minimalist white bridal bouquet at The Joule Hotel wedding'
    },
    {
      id: 12,
      category: 'events',
      title: 'Charity Fundraiser',
      venue: 'Fair Park',
      image: 'https://thumbs.dreamstime.com/b/photo-captures-elegant-table-settings-vibrant-charity-gala-dinner-held-philanthropic-cause-fundraising-evening-324107607.jpg',
      alt: 'Charity fundraiser gala with colorful floral arrangements at Fair Park'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="animate-on-scroll group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden glow-accent">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <Eye className="h-6 w-6 mx-auto mb-2" />
                    <h3 className="font-caps text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-80">{item.venue}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-caps capitalize">
                    {item.category}
                  </span>
                </div>

                {/* Interaction Icons */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Heart className="h-4 w-4 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-12 animate-on-scroll">
            <button className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-8 py-3 font-caps text-sm hover:glow-accent transition-all duration-300">
              Load More Images
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-muted-foreground">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No images found for this category.</p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal - Simple overlay for now */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            {/* Lightbox content would go here */}
            <div className="text-white text-center">
              <p>Image viewer for image {selectedImage}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
