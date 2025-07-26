import { createEffect } from 'solid-js'
import { Trophy, Star, Heart, Crown } from 'lucide-solid'

export default function KoniAchievements() {
  let sectionRef: HTMLElement | undefined

  createEffect(() => {
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

    const section = sectionRef
    if (section) {
      const elements = section.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  })

  const achievements = [
    {
      icon: Trophy,
      title: 'Excellence in Floral Design',
      description: 'Recognized for outstanding creativity and technical excellence in luxury wedding florals'
    },
    {
      icon: Star,
      title: 'Million-Dollar Events',
      description: 'Trusted designer for high-profile weddings and celebrity events across Texas'
    },
    {
      icon: Heart,
      title: 'Client Satisfaction',
      description: '98% client satisfaction rate with over 500 completed wedding projects'
    },
    {
      icon: Crown,
      title: 'Elite Venue Partner',
      description: 'Preferred florist at 50+ luxury venues throughout the Dallas-Fort Worth metroplex'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      class="py-20 bg-background/95"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Recognition & <span class="text-accent">Achievements</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            15 years of dedication to floral artistry has earned recognition from 
            clients, venues, and industry professionals throughout Texas.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div 
                class="animate-on-scroll text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 hover:glow-accent transition-all duration-300"
              >
                <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon class="h-8 w-8 text-accent" />
                </div>
                <h3 class="font-caps text-lg mb-3">{achievement.title}</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Professional Credentials */}
        <div class="mt-16 animate-on-scroll">
          <div class="bg-accent/5 rounded-lg p-8 text-center">
            <h3 class="font-caps text-xl text-accent mb-6">Professional Credentials</h3>
            <div class="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Certified Floral Designer</strong>
                <p class="text-muted-foreground mt-1">Professional certification in advanced floral design techniques</p>
              </div>
              <div>
                <strong>Wedding Industry Expert</strong>
                <p class="text-muted-foreground mt-1">15+ years specializing in luxury wedding and event florals</p>
              </div>
              <div>
                <strong>Business Excellence</strong>
                <p class="text-muted-foreground mt-1">Licensed and insured floral design business serving DFW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}