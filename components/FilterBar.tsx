'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  Building2,
  Landmark,
  Home,
  Warehouse,
  ArrowDown,
  ArrowUp,
  Star,
} from 'lucide-react'

const filters = [
  { label: 'Flat', icon: Building2 },
  { label: 'Villa', icon: Landmark },
  { label: 'House', icon: Home },
  { label: 'Ferme', icon: Warehouse },
  { label: 'Price - Low', icon: ArrowDown },
  { label: 'Price - High', icon: ArrowUp },
  { label: 'Top Rated', icon: Star },
]

const FilterBar = ({ activeFilter, onFilterChange } : any) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap mb-4">
      <div className="flex space-x-6 px-4 py-2">
        {filters.map((filter, idx) => {
          const Icon = filter.icon
          const isActive = activeFilter === filter.label

          return (
            <div
              key={idx}
              onClick={() => onFilterChange(filter.label)}
              className={cn(
                'flex flex-col items-center justify-center cursor-pointer',
                isActive ? 'text-black font-bold' : 'text-muted-foreground opacity-60 font-semibold'
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{filter.label}</span>
            </div>
          )
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default FilterBar
