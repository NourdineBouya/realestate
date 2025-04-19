'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

const filters = [
  'Flat', 'Villa', 'House', 'Ferme',
  'Price - Low', 'Price - High',
  'Top Rated', 'Sun', 'Small', 'Big'
]

const FilterBar = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap mb-4">
      <div className="flex space-x-3 px-4">
        {filters.map((filter, idx) => (
          <Button
            key={idx}
            variant="outline"
            className="text-sm font-medium"
          >
            {filter}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default FilterBar
