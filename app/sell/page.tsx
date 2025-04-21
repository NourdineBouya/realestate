'use client'

import { useState } from 'react'
import FilterBar from '@/components/FilterBar'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'

// Dummy Data
const dummyData = [
  {
    id: 1,
    title: 'Luxury Villa by the Beach',
    type: 'Villa',
    price: 320,
    rating: 4.8,
    user: 'Alice',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 2,
    title: 'Modern Flat in City Center',
    type: 'Flat',
    price: 150,
    rating: 4.2,
    user: 'Bob',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 3,
    title: 'Spacious Family House',
    type: 'House',
    price: 220,
    rating: 4.5,
    user: 'Charlie',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 4,
    title: 'Quiet Ferme in Countryside',
    type: 'Ferme',
    price: 280,
    rating: 4.7,
    user: 'Diane',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 5,
    title: 'Cozy Flat near Park',
    type: 'Flat',
    price: 120,
    rating: 4.0,
    user: 'Eve',
    imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 6,
    title: 'Mountain Villa Retreat',
    type: 'Villa',
    price: 400,
    rating: 5.0,
    user: 'Frank',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 7,
    title: 'Renovated House with Garden',
    type: 'House',
    price: 240,
    rating: 4.3,
    user: 'Grace',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  },
  {
    id: 8,
    title: 'Ferme with Pool',
    type: 'Ferme',
    price: 300,
    rating: 4.9,
    user: 'Henry',
     imageUrl: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg'
  }
]

const RentPage = () => {
  const [activeFilter, setActiveFilter] = useState('')

  const filteredData = dummyData.filter((property) => {
    if (['Flat', 'Villa', 'House', 'Ferme'].includes(activeFilter)) {
      return property.type === activeFilter
    }
    return true
  })

  const sortedData = [...filteredData].sort((a, b) => {
    if (activeFilter === 'Price - Low') return a.price - b.price
    if (activeFilter === 'Price - High') return b.price - a.price
    if (activeFilter === 'Top Rated') return b.rating - a.rating
    return 0
  })

  return (
    <div className="p-6 max-w-7xl mx-auto">
     <FilterBar 
  activeFilter={activeFilter} 
  onFilterChange={setActiveFilter} 
/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedData.map((property) => (
          <Link href={`/details/${property.id}`} key={property.id}>
            <PropertyCard
              title={property.title}
              price={property.price}
              imageUrl={property.imageUrl}
              rating={property.rating}
              user={property.user}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RentPage
