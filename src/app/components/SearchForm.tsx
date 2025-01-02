'use client'

import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import AdvancedFilters from './AdvancedFilters'

interface Procedure {
  id: number;
  name: string;
  location: string;
  hospital: string;
  totalCostWithoutInsurance: number;
  insuranceCoverage: number;
  outOfPocketCost: number;
}

const mockProcedures: Procedure[] = [
  { id: 1, name: "Colonoscopy", location: "Houston, TX", hospital: "Houston Medical Center", totalCostWithoutInsurance: 3000, insuranceCoverage: 2400, outOfPocketCost: 600 },
  { id: 2, name: "Colonoscopy", location: "Dallas, TX", hospital: "Dallas General Hospital", totalCostWithoutInsurance: 3500, insuranceCoverage: 2800, outOfPocketCost: 700 },
  { id: 3, name: "Colonoscopy", location: "Austin, TX", hospital: "Austin Health Institute", totalCostWithoutInsurance: 2800, insuranceCoverage: 2240, outOfPocketCost: 560 },
  { id: 4, name: "MRI Scan", location: "New York, NY", hospital: "NYC Medical", totalCostWithoutInsurance: 2500, insuranceCoverage: 2000, outOfPocketCost: 500 },
  { id: 5, name: "CT Scan", location: "Los Angeles, CA", hospital: "LA Health Center", totalCostWithoutInsurance: 1800, insuranceCoverage: 1440, outOfPocketCost: 360 },
  { id: 6, name: "X-Ray", location: "Chicago, IL", hospital: "Chicago General", totalCostWithoutInsurance: 500, insuranceCoverage: 400, outOfPocketCost: 100 },
  { id: 7, name: "Blood Test", location: "Phoenix, AZ", hospital: "Phoenix Labs", totalCostWithoutInsurance: 200, insuranceCoverage: 160, outOfPocketCost: 40 },
  { id: 8, name: "Knee Replacement", location: "Boston, MA", hospital: "Boston Medical", totalCostWithoutInsurance: 50000, insuranceCoverage: 40000, outOfPocketCost: 10000 },
  { id: 9, name: "Cataract Surgery", location: "Miami, FL", hospital: "Miami Eye Institute", totalCostWithoutInsurance: 5000, insuranceCoverage: 4000, outOfPocketCost: 1000 },
  { id: 10, name: "Mammogram", location: "Seattle, WA", hospital: "Seattle Women's Clinic", totalCostWithoutInsurance: 300, insuranceCoverage: 240, outOfPocketCost: 60 },
]

interface SearchFormProps {
  onSearch: (results: Procedure[]) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<any>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const results = mockProcedures.filter(procedure => 
      procedure.name.toLowerCase().includes(query.toLowerCase()) ||
      procedure.location.toLowerCase().includes(query.toLowerCase()) ||
      procedure.hospital.toLowerCase().includes(query.toLowerCase())
    )
    onSearch(results)
  }

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // In a real application, you would apply these filters to your search results
  }

  return (
    <section className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Search for Medical Procedures</h2>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Enter a medical procedure, location, or hospital..."
            className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-2 top-2 text-gray-600 hover:text-blue-600">
            <SearchIcon className="w-6 h-6" />
          </button>
        </div>
        <AdvancedFilters onFilterChange={handleFilterChange} />
      </form>
    </section>
  )
}

