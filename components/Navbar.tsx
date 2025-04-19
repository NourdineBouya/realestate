'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, Menu } from 'lucide-react'
import { Home } from 'lucide-react'
import clsx from 'clsx'
import { useState } from 'react'

const links = [
   
    { name: 'Sell', href: '/sell' },
    { name: 'Rent', href: '/rent' },
    { name: 'Contact', href: '/contact' },
]

const Navbar = () =>  {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    return (
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left - Logo */}
         <Link href={'/'} >
         <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-black" />
            <span className="text-xl font-bold text-black">Orchidisland</span>
          </div>
         </Link>
  
          {/* Center - Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'text-black font-semibold hover:underline underline-offset-4 transition',
                  pathname === link.href && 'underline font-bold'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
  
          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-black" />
            <span className="text-black font-semibold hidden sm:block">Nourdine</span>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
  
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // close after click
                className={clsx(
                  'block text-black font-semibold hover:underline underline-offset-4 transition',
                  pathname === link.href && 'underline font-bold'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    )
  }

export default Navbar
