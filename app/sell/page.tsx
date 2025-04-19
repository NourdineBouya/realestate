import FilterBar from '@/components/FilterBar'
import PropertyCard from '@/components/PropertyCard'

const dummyData = [
  {
    title: 'Villa for Sell',
    price: 320,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
  {
    title: 'Flat for Sell',
    price: 150,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
  {
    title: 'House for Sell',
    price: 220,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
  {
    title: 'Ferme for Sell',
    price: 280,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg'
  },
]

const SellPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
        {dummyData.map((property, idx) => (
          <PropertyCard
            key={idx}
            title={property.title}
            price={property.price}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default SellPage
