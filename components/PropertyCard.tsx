import { Heart } from 'lucide-react'
import Image from 'next/image'

interface PropertyCardProps {
  title: string
  price: number
  imageUrl: string
  rating : number
  user : string
}

const PropertyCard = ({ title, price, imageUrl, rating, user } : PropertyCardProps) => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Posted by {user}</p>
        <p className="mt-1 text-blue-600 font-bold">${price}/night</p>
        <p className="text-yellow-500 text-sm">⭐ {rating}</p>
      </div>
    </div>
  )
}


export default PropertyCard
