import { createSignal, createEffect } from 'solid-js'
import { A } from 'solid-start/router' // Assuming solid-start/router for client-side navigation
import { useTheme } from 'next-themes' // Assuming a SolidJS compatible useTheme hook
import { Menu, X, Sun, Moon, ZoomIn, ZoomOut } from 'lucide-solid'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = createSignal(false)
  const [scrolled, setScrolled] = createSignal(false)
  const [zoomLevel, setZoomLevel] = createSignal(100)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = createSignal(false)

  createEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleZoomIn = () => {
    const newZoom = Math.min(zoomLevel() + 10, 150)
    setZoomLevel(newZoom)
    document.body.style.transform = `scale(${newZoom / 100})`
    document.body.style.transformOrigin = 'top left'
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel() - 10, 80)
    setZoomLevel(newZoom)
    document.body.style.transform = `scale(${newZoom / 100})`
    document.body.style.transformOrigin = 'top left'
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dallas-wedding-florist', label: 'Weddings' },
    { href: '/flower-subscriptions', label: 'Subscriptions' },
    { href: '/about-koni', label: 'About Koni' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/koni-tips', label: 'Tips & Clips' },
    { href: '/contact', label: 'Contact' },
  ]

  if (!mounted()) return null

  return (
    <header 
      class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled() 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo */}
          <A href="/" class="flex items-center space-x-3">
            <div class="relative w-8 h-8">
              <img
                src="/assets/konilogo.jpg"
                alt="Anemone Duette Logo"
                class="object-contain rounded-full"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              />
            </div>
            <span class="font-deco text-xl">Anemone Duette</span>
          </A>

          {/* Desktop Navigation */}
          <nav class="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <A
                key={link.href}
                href={link.href}
                class="text-sm font-medium transition-colors hover:text-accent relative group"
              >
                {link.label}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </A>
            ))}
          </nav>

          {/* Controls */}
          <div class="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme() === 'dark' ? 'light' : 'dark')}
              class="h-9 w-9"
            >
              {theme() === 'dark' ? (
                <Sun class="h-4 w-4" />
              ) : (
                <Moon class="h-4 w-4" />
              )}
            </Button>

            {/* Zoom Controls */}
            <div class="hidden sm:flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomOut}
                class="h-9 w-9"
                disabled={zoomLevel() <= 80}
              >
                <ZoomOut class="h-4 w-4" />
              </Button>
              <span class="text-xs px-2">{zoomLevel()}%</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomIn}
                class="h-9 w-9"
                disabled={zoomLevel() >= 150}
              >
                <ZoomIn class="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              class="lg:hidden h-9 w-9"
              onClick={() => setIsOpen(!isOpen())}
            >
              {isOpen() ? <X class="h-4 w-4" /> : <Menu class="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen() && (
          <div class="lg:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/50">
              {navLinks.map((link) => (
                <A
                  key={link.href}
                  href={link.href}
                  class="block px-3 py-2 text-sm font-medium transition-colors hover:text-accent hover:bg-accent/10 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </A>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}