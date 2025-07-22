
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Clock, Play, BookOpen, ArrowRight } from 'lucide-react'

export default function BlogGrid() {
  const sectionRef = useRef<HTMLElement>(null)

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

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Flower Trends for Dallas Summer Weddings',
      excerpt: 'Discover the hottest floral trends for Texas summer weddings that can withstand the heat and look stunning.',
      category: 'Trends',
      readTime: '5 min read',
      type: 'video',
      image: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/a-eHC0cKrWu_INiFmnSFs6_2YYU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/HKWVCZMJYJBRHDZQWFCMIC2BJA.jpg',
      questions: ['Which flowers survive Texas heat?', 'Best summer wedding colors?']
    },
    {
      id: 2,
      title: 'Budget Wedding Flowers: Luxe Look for Under $2K',
      excerpt: 'Learn how to achieve a high-end floral look on a modest budget with strategic choices and smart substitutions.',
      category: 'Budget Tips',
      readTime: '7 min read',
      type: 'article',
      image: 'https://i.ytimg.com/vi/PlgtWTvZAug/maxresdefault.jpg',
      questions: ['How to save on wedding flowers?', 'Cheap alternatives to expensive blooms?']
    },
    {
      id: 3,
      title: 'Elopement Florals: What You Really Need',
      excerpt: 'Planning an intimate elopement? Get the essential floral elements that make the biggest impact for small ceremonies.',
      category: 'Elopements',
      readTime: '4 min read',
      type: 'video',
      image: 'https://www.palmerhouseinn.com/wp-content/uploads/2023/09/brides-with-champagne-and-bouquets-slide.jpg',
      questions: ['Essential flowers for elopement?', 'How much to spend on elopement florals?']
    },
    {
      id: 4,
      title: 'Best Dallas Venues for Floral Backdrops',
      excerpt: 'Explore the most photogenic wedding venues in Dallas that enhance your floral arrangements beautifully.',
      category: 'Venues',
      readTime: '6 min read',
      type: 'article',
      image: 'https://dallasoasis.com/wp-content/uploads/2022/10/Slide_8.jpg',
      questions: ['Best venues for flower photography?', 'Which venues complement florals?']
    },
    {
      id: 5,
      title: 'Seasonal Flower Guide: Texas Wedding Blooms',
      excerpt: 'Month-by-month guide to the best flowers available in Texas, including pricing and availability tips.',
      category: 'Seasonal Guide',
      readTime: '10 min read',
      type: 'article',
      image: 'https://i.ytimg.com/vi/LS19fr2URKs/maxresdefault.jpg',
      questions: ['Best flowers by season in Texas?', 'When are flowers cheapest?']
    },
    {
      id: 6,
      title: 'Bridal Bouquet Styles: Finding Your Perfect Match',
      excerpt: 'From cascading to compact, discover which bouquet style complements your dress, venue, and personal aesthetic.',
      category: 'Bridal Style',
      readTime: '8 min read',
      type: 'video',
      image: 'https://www.liveenhanced.com/wp-content/uploads/2023/09/Unique-Bridal-Bouquets-Thumbnail-1-900x500.jpg',
      questions: ['What bouquet style suits my dress?', 'How to choose bouquet size?']
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Latest <span className="text-accent">Tips & Guides</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert advice to help you make the best floral decisions for your special day
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="animate-on-scroll bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden glow-accent hover:scale-105 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Type indicator */}
                <div className="absolute top-4 left-4">
                  <div className="bg-accent/90 backdrop-blur-sm p-2 rounded-full">
                    {post.type === 'video' ? (
                      <Play className="h-4 w-4 text-accent-foreground" />
                    ) : (
                      <BookOpen className="h-4 w-4 text-accent-foreground" />
                    )}
                  </div>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-caps">
                    {post.category}
                  </span>
                </div>

                {/* Read time */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-caps text-lg mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Questions */}
                <div className="mb-4">
                  <div className="text-xs font-caps text-accent mb-2">Questions Answered:</div>
                  <ul className="space-y-1">
                    {post.questions.map((question, qIndex) => (
                      <li key={qIndex} className="text-xs text-muted-foreground flex items-start space-x-1">
                        <span className="text-accent mt-1">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  {post.type === 'video' ? 'Watch Video' : 'Read Article'}
                  <ArrowRight className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center animate-on-scroll">
          <Button variant="glow" size="lg" className="min-h-[48px]">
            Load More Tips & Guides
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 animate-on-scroll">
          <div className="bg-accent/5 rounded-lg p-8 lg:p-12 text-center">
            <h3 className="font-deco text-2xl mb-4">
              Never Miss a <span className="text-accent">Tip</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest wedding flower tips, seasonal guides, and exclusive advice 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-md text-sm"
              />
              <Button variant="glow" className="min-h-[48px] px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
