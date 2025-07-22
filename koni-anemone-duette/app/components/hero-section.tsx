
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays on component mount
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-video"
        poster="/assets/konilogo.jpg"
      >
        <source src="/assets/dfw_gabriela_wedding.mp4" type="video/mp4" />
        <Image
          src="/assets/konilogo.jpg"
          alt="Anemone Duette bridal entrance scene"
          fill
          className="object-cover"
          priority
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo Overlay */}
        <div className="mb-8 animate-fade-in">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/assets/konilogo.jpg"
              alt="Anemone Duette Logo"
              fill
              className="object-contain rounded-full glow-accent"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-deco text-4xl sm:text-5xl lg:text-7xl text-white mb-6 animate-fade-in">
          Elite Wedding Florals
          <span className="block text-accent mt-2">in Dallas–Fort Worth</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Custom bridal bouquets and luxury floral design by Anemone Duette. 
          Serving Dallas, Fort Worth, Arlington, Plano, Frisco, and surrounding DFW metroplex.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            asChild 
            variant="glow" 
            size="lg"
            className="min-h-[48px] px-8 text-lg font-caps"
          >
            <Link href="/dallas-wedding-florist">
              View Wedding Packages
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="min-h-[48px] px-8 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <Link href="/contact">
              Book Consultation
            </Link>
          </Button>
        </div>

        {/* Service Areas */}
        <div className="mt-12 animate-fade-in">
          <p className="text-sm text-white/70 mb-2 font-caps">Proudly Serving</p>
          <p className="text-white/90 text-sm">
            Dallas • Fort Worth • Arlington • Frisco • Plano • McKinney • Irving • Garland • Denton • Lewisville • Austin
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  )
}
