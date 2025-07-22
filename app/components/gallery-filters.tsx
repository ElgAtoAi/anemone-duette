
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Filter, Grid, Heart, Gift } from 'lucide-react'

interface GalleryFiltersProps {
  onFilterChange?: (filter: string) => void
}

export default function GalleryFilters({ onFilterChange }: GalleryFiltersProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Work', icon: Grid },
    { id: 'weddings', label: 'Weddings', icon: Heart },
    { id: 'events', label: 'Events', icon: Filter },
    { id: 'subscriptions', label: 'Subscriptions', icon: Gift }
  ]

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  return (
    <section className="py-12 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "glow" : "outline"}
                size="lg"
                onClick={() => handleFilterChange(filter.id)}
                className="min-h-[48px] flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {filter.label}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
