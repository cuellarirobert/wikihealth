'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            HealthCostClarity
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/map" className="hover:text-blue-200">
              Map View
            </Link>
            <Link href="/upload" className="hover:text-blue-200">
              Upload Bill
            </Link>
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/map"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Map View
            </Link>
            <Link
              href="/upload"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Upload Bill
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

