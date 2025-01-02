'use client'

import { useState } from 'react'
import { SearchIcon, ChevronLeft, ChevronRight } from 'lucide-react'

// Mock data for search results
const mockResults = [
  { id: 1, procedure: 'MRI Scan', location: 'New York, NY', cost: '$1,200 - $3,000' },
  { id: 2, procedure: 'Colonoscopy', location: 'Los Angeles, CA', cost: '$1,500 - $4,000' },
  { id: 3, procedure: 'Knee Replacement', location: 'Chicago, IL', cost: '$20,000 - $50,000' },
  { id: 4, procedure: 'CT Scan', location: 'Houston, TX', cost: '$500 - $1,500' },
  { id: 5, procedure: 'Cataract Surgery', location: 'Miami, FL', cost: '$3,000 - $7,000' },
]

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(mockResults)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implement actual search logic here
    console.log('Searching for:', query)
    // For now, we'll just use the mock data
    setResults(mockResults.filter(item => item.procedure.toLowerCase().includes(query.toLowerCase())))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Search for Medical Procedures</h2>
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a procedure..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-2 text-gray-600 hover:text-blue-600">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
        {results.length > 0 && (
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {results.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.procedure}</h3>
                      <p className="text-gray-600 mb-2">Location: {item.location}</p>
                      <p className="text-blue-600 font-semibold">Cost Range: {item.cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

