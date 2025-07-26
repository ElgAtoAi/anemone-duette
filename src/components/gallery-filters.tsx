import { createSignal } from 'solid-js'
import { Button } from '@/components/ui/button'
import { Filter, Grid, Heart, Gift } from 'lucide-react' // Note: For a pure SolidJS app, you might prefer 'lucide-solid'

interface GalleryFiltersProps {
  onFilterChange?: (filter: string) => void
}

export default function GalleryFilters(props: GalleryFiltersProps) {
  const [activeFilter, setActiveFilter] = createSignal('all')

  const filters = [
    { id: 'all', label: 'All Work', icon: Grid },
    { id: 'weddings', label: 'Weddings', icon: Heart },
    { id: 'events', label: 'Events', icon: Filter },
    { id: 'subscriptions', label: 'Subscriptions', icon: Gift }
  ]

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    props.onFilterChange?.(filterId)
  }

  return (
    <section class="py-12 bg-muted/20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <Button
                key={filter.id}
                variant={activeFilter() === filter.id ? "glow" : "outline"}
                size="lg"
                onClick={() => handleFilterChange(filter.id)}
                class="min-h-[48px] flex items-center gap-2"
              >
                <Icon class="h-4 w-4" />
                {filter.label}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}