'use client'

import { Calendar } from "@/components/ui/calendar"
import { Heart, Share2, Wifi, BedDouble, Snowflake, MapPin } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, use } from "react"



const DetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pb-20 px-20">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-40 shadow px-6 py-4 flex justify-between items-center border-b">
        <h2 className="font-semibold text-lg">Luxury Villa in Marrakech</h2>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
          Reserve
        </button>
      </div>

      {/* Images */}
      <div className="px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
          <div className="relative col-span-2 h-full">
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg"
              alt="Main House"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            {[1, 2].map(i => (
              <div key={i} className="relative h-full">
                <Image
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-1084787802390400667/original/c7c04cdb-92f6-46ed-bc5c-9be115cd4e17.jpeg"
                  alt={`Gallery ${i}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Title + Actions */}
      <div className="px-6 md:px-20 mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Luxury Villa in Marrakech</h1>
            <p className="text-gray-500">Marrakech, Morocco</p>
          </div>
          <div className="flex gap-4 text-gray-600">
            <button className="hover:text-black flex items-center gap-2"><Share2 size={18} /> Share</button>
            <button className="hover:text-black flex items-center gap-2"><Heart size={18} /> Save</button>
          </div>
        </div>

        {/* Host + Description */}
        <p className="text-gray-600 text-lg max-w-3xl">
          A stunning luxury villa in the heart of Marrakech. Private pool, modern design, and ultimate relaxation await.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-gray-700">
          <div className="flex items-center gap-3"><BedDouble /> 2 Bedrooms</div>
          <div className="flex items-center gap-3"><Wifi /> Free Wifi</div>
          <div className="flex items-center gap-3"><Snowflake /> Air Conditioning</div>
          <div className="flex items-center gap-3"><MapPin /> City Center</div>
        </div>
      </div>

      {/* Booking Panel + Reviews */}
      <div className="grid md:grid-cols-2 gap-12 mt-12 px-6 md:px-20">
        {/* Calendar */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">€120 / night</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
          />
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-xl font-semibold mb-4">What guests are saying</h3>
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-medium">User {i}</p>
                  <p className="text-gray-600 text-sm">Amazing stay! The villa was sparkling clean and very peaceful. Would come again.</p>
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
