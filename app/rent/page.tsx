import FilterBar from '@/components/FilterBar'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link' // Use the correct Link component from Next.js

const dummyData = [
  {
    id: 1, // Added id field to each property
    title: 'Villa for rent',
    price: 320,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
  {
    id: 2, // Added id field to each property
    title: 'Flat for rent',
    price: 150,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
  {
    id: 3, // Added id field to each property
    title: 'House for rent',
    price: 220,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
  {
    id: 4, // Added id field to each property
    title: 'Ferme for rent',
    price: 280,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
]

const RentPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyData.map((property) => (
          <Link href={`/details/${property.id}`} key={property.id}> {/* Use the property id */}
            <PropertyCard
              title={property.title}
              price={property.price}
              imageUrl={property.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RentPage
