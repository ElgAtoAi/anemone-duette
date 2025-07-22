
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(100)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleZoomIn = () => {
    const newZoom = Math.min(zoomLevel + 10, 150)
    setZoomLevel(newZoom)
    document.body.style.transform = `scale(${newZoom / 100})`
    document.body.style.transformOrigin = 'top left'
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel - 10, 80)
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

  if (!mounted) return null

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <Image
                src="/assets/konilogo.jpg"
                alt="Anemone Duette Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span className="font-deco text-xl">Anemone Duette</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomOut}
                className="h-9 w-9"
                disabled={zoomLevel <= 80}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-xs px-2">{zoomLevel}%</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomIn}
                className="h-9 w-9"
                disabled={zoomLevel >= 150}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium transition-colors hover:text-accent hover:bg-accent/10 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
