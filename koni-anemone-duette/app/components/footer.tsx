
import Link from 'next/link'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-caps text-lg mb-4">Contact Koni</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a 
                  href="tel:+12145321454" 
                  className="text-sm hover:text-accent transition-colors"
                >
                  (214) 532-1454
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href="mailto:anemoneduette@gmail.com" 
                  className="text-sm hover:text-accent transition-colors"
                >
                  anemoneduette@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Richardson, TX 75080</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-accent" />
                <a 
                  href="https://www.instagram.com/anemoneduette" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  @anemoneduette
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-caps text-lg mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <span>Dallas</span>
              <span>Fort Worth</span>
              <span>Arlington</span>
              <span>Frisco</span>
              <span>Plano</span>
              <span>McKinney</span>
              <span>Irving</span>
              <span>Garland</span>
              <span>Denton</span>
              <span>Lewisville</span>
              <span>Austin</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-caps text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="/dallas-wedding-florist" 
                className="block text-sm hover:text-accent transition-colors"
              >
                Wedding Packages
              </Link>
              <Link 
                href="/flower-subscriptions" 
                className="block text-sm hover:text-accent transition-colors"
              >
                Monthly Subscriptions
              </Link>
              <Link 
                href="/gallery" 
                className="block text-sm hover:text-accent transition-colors"
              >
                Portfolio Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block text-sm hover:text-accent transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Anemone Duette. Elite wedding florals by Gabriela Concordia Falk.
          </p>
        </div>
      </div>
    </footer>
  )
}
