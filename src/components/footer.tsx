import { A } from 'solid-start/router'
import { Phone, Mail, Instagram, MapPin } from 'lucide-solid' // Assuming lucide-solid for SolidJS

export default function Footer() {
  return (
    <footer class="bg-background border-t border-border/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 class="font-caps text-lg mb-4">Contact Koni</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <Phone class="h-4 w-4 text-accent" />
                <a 
                  href="tel:+12145321454" 
                  class="text-sm hover:text-accent transition-colors"
                >
                  (214) 532-1454
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <Mail class="h-4 w-4 text-accent" />
                <a 
                  href="mailto:anemoneduette@gmail.com" 
                  class="text-sm hover:text-accent transition-colors"
                >
                  anemoneduette@gmail.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <MapPin class="h-4 w-4 text-accent" />
                <span class="text-sm">Richardson, TX 75080</span>
              </div>
              <div class="flex items-center space-x-3">
                <Instagram class="h-4 w-4 text-accent" />
                <a 
                  href="https://www.instagram.com/anemoneduette" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm hover:text-accent transition-colors"
                >
                  @anemoneduette
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 class="font-caps text-lg mb-4">Service Areas</h3>
            <div class="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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
            <h3 class="font-caps text-lg mb-4">Quick Links</h3>
            <div class="space-y-2">
              <A 
                href="/dallas-wedding-florist" 
                class="block text-sm hover:text-accent transition-colors"
              >
                Wedding Packages
              </A>
              <A 
                href="/flower-subscriptions" 
                class="block text-sm hover:text-accent transition-colors"
              >
                Monthly Subscriptions
              </A>
              <A 
                href="/gallery" 
                class="block text-sm hover:text-accent transition-colors"
              >
                Portfolio Gallery
              </A>
              <A 
                href="/contact" 
                class="block text-sm hover:text-accent transition-colors"
              >
                Book Consultation
              </A>
            </div>
          </div>
        </div>

        <div class="border-t border-border/50 mt-8 pt-8 text-center">
          <p class="text-sm text-muted-foreground">
            © 2025 Anemone Duette. Elite wedding florals by Gabriela Concordia Falk.
          </p>
        </div>
      </div>
    </footer>
  )
}