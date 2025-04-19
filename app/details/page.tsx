 
'use client'

import { Calendar } from "@/components/ui/calendar"
import { Heart, Share2, Wifi, BedDouble, Snowflake, MapPin } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'

const DetailPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [mounted, setMounted] = useState(false)
  
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Ensure useRouter is only called on the client side
    setMounted(true)
  }, [])

  if (!mounted) return null // Return null while the component is mounting to avoid server-side rendering issues

  // if (!id) {
  //   return <div>Loading...</div> // Handle loading state until ID is available
  // }

  return (
    <div className="pb-20">
      {/* Sticky Action Button */}
      <div className="sticky top-0 bg-white z-40 shadow px-4 py-3 flex justify-between items-center">
        <h2 className="font-bold text-lg">Villa for Rent - Marrakech</h2>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
          Reserve Now
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 px-4 md:px-20">
        {/* Main Image */}
      <div className="relative w-[600px] h-[400px]">
        <Image
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg"
          alt="Main House"
          fill
          className="object-cover rounded-b-lg"
        />
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 gap-4 mt-6 px-4 md:px-20">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative w-[200px] h-52">
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg"
              alt={`Gallery ${i}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      </div>

      {/* Info Section */}
      <div className="px-4 md:px-20 mt-10 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Luxury Villa in Marrakech</h1>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-black">
              <Heart />
            </button>
            <button className="text-gray-600 hover:text-black">
              <Share2 />
            </button>
          </div>
        </div>

        <p className="text-gray-600 text-lg max-w-3xl">
          A stunning luxury villa located in the heart of Marrakech. Experience
          ultimate comfort and privacy with top-notch amenities and beautiful
          interiors.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-gray-700">
            <BedDouble className="text-black" />
            <span>2 Bedrooms</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Wifi className="text-black" />
            <span>Free Wifi</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Snowflake className="text-black" />
            <span>Air Conditioning</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-black" />
            <span>Marrakech City Center</span>
          </div>
        </div>

        {/* Price & Calendar */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Price: <span className="text-black">€120 / night</span></h2>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </div>

          {/* Comments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">What people say</h3>
            {[1, 2].map((c) => (
              <div key={c} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">User {c}</p>
                  <p className="text-gray-500">This villa is amazing! Highly recommended!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
