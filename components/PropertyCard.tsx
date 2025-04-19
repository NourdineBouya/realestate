import { Heart } from 'lucide-react'
import Image from 'next/image'

interface PropertyCardProps {
  title: string
  price: number
  imageUrl: string
}

const PropertyCard = ({ title, price, imageUrl }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-[300px]">
      <div className="relative h-60 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
                <div className='flex justify-between items-center px-2'>
                <h3 className="text-lg font-bold text-black mb-1">{title}</h3>
                <Heart />
                </div>
        <p className="text-sm font-semibold text-gray-700">${price}/night</p>
      </div>
    </div>
  )
}

export default PropertyCard
