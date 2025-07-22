
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Anemone Duette | Elite Wedding Florist | Dallas Fort Worth',
  description: 'Elite wedding and event florist based in Richardson, TX, serving the entire Dallas–Fort Worth metroplex and surrounding regions. Custom bridal bouquets, luxury floral design, and premium wedding flowers.',
  keywords: 'DFW wedding florist, Dallas wedding flowers, Fort Worth florist, wedding flower packages, bridal bouquet DFW, elite florist Dallas',
  authors: [{ name: 'Gabriela Concordia Falk' }],
  creator: 'Anemone Duette',
  openGraph: {
    title: 'Anemone Duette | Elite Wedding Florist | Dallas Fort Worth',
    description: 'Elite wedding and event florist serving Dallas-Fort Worth metroplex',
    url: 'https://anemoneduette.com',
    siteName: 'Anemone Duette',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anemone Duette",
  "description": "Elite wedding and event florist based in Richardson, TX, serving the entire Dallas–Fort Worth metroplex and surrounding regions.",
  "email": "anemoneduette@gmail.com",
  "telephone": "+12145321454",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Richardson",
    "addressRegion": "TX",
    "postalCode": "75080",
    "addressCountry": "US"
  },
  "areaServed": ["Dallas", "Fort Worth", "Arlington", "Frisco", "Plano", "McKinney", "Irving", "Garland", "Denton", "Lewisville", "Austin"],
  "sameAs": ["https://www.instagram.com/anemoneduette"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" href="/assets/dfw_gabriela_wedding.mp4" as="video" type="video/mp4" />
        <link rel="icon" href="/assets/konilogo.jpg" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
