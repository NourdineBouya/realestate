// components/Footer.tsx
'use client'

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Orchidisland</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Orchidisland is a premier real estate agency in Marrakech and across Morocco. We help you find the perfect place to buy, sell, or rent.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/buy" className="hover:text-white">Buy</Link></li>
            <li><Link href="/sell" className="hover:text-white">Sell</Link></li>
            <li><Link href="/rent" className="hover:text-white">Rent</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: contact@orchidisland.immo</li>
            <li>Phone: +212 6 12 34 56 78</li>
            <li>Address: Marrakech, Morocco</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Orchidisland. All rights reserved. | Designed by Nourdine
      </div>
    </footer>
  )
}

export default Footer
