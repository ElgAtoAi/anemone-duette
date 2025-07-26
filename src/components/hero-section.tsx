import { createEffect, useRef } from 'solid-js'
import { Button } from '@/components/ui/button' // Assuming this component is SolidJS compatible or a simple wrapper
import { ChevronDown } from 'lucide-solid' // Assuming lucide-solid is used for SolidJS icons

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  createEffect(() => {
    // Ensure video plays on component mount
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }) // No dependency array needed for mount-only effect in SolidJS

  return (
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        class="hero-video"
        poster="/assets/konilogo.jpg"
      >
        <source src="/assets/dfw_gabriela_wedding.mp4" type="video/mp4" />
        {/* Fallback image for browsers that don't support video */}
        <img
          src="/assets/konilogo.jpg"
          alt="Anemone Duette bridal entrance scene"
          class="object-cover absolute inset-0 w-full h-full"
        />
      </video>

      {/* Overlay */}
      <div class="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div class="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo Overlay */}
        <div class="mb-8 animate-fade-in">
          <div class="relative w-24 h-24 mx-auto mb-6">
            <img
              src="/assets/konilogo.jpg"
              alt="Anemone Duette Logo"
              class="object-contain rounded-full glow-accent w-full h-full"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 class="font-deco text-4xl sm:text-5xl lg:text-7xl text-white mb-6 animate-fade-in">
          Elite Wedding Florals
          <span class="block text-accent mt-2">in Dallas–Fort Worth</span>
        </h1>

        {/* Subheading */}
        <p class="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Custom bridal bouquets and luxury floral design by Anemone Duette. 
          Serving Dallas, Fort Worth, Arlington, Plano, Frisco, and surrounding DFW metroplex.
        </p>

        {/* CTA Buttons */}
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            // asChild prop is React specific, assuming Button component renders children directly in SolidJS
            variant="glow" 
            size="lg"
            class="min-h-[48px] px-8 text-lg font-caps"
          >
            <a href="/dallas-wedding-florist">
              View Wedding Packages
            </a>
          </Button>
          <Button 
            // asChild prop is React specific, assuming Button component renders children directly in SolidJS
            variant="outline" 
            size="lg"
            class="min-h-[48px] px-8 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <a href="/contact">
              Book Consultation
            </a>
          </Button>
        </div>

        {/* Service Areas */}
        <div class="mt-12 animate-fade-in">
          <p class="text-sm text-white/70 mb-2 font-caps">Proudly Serving</p>
          <p class="text-white/90 text-sm">
            Dallas • Fort Worth • Arlington • Frisco • Plano • McKinney • Irving • Garland • Denton • Lewisville • Austin
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown class="h-6 w-6 text-white/70" />
      </div>
    </section>
  )
}