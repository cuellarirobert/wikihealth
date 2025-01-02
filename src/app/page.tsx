'use client'

import { useState } from 'react'
import SearchForm from './components/SearchForm'
import RecentInsights from './components/RecentInsights'
import PopularProcedures from './components/PopularProcedures'
import CostSavingTips from './components/CostSavingTips'
import SearchResultsTable from './components/SearchResultsTable'

interface Procedure {
  id: number;
  name: string;
  location: string;
  hospital: string;
  totalCostWithoutInsurance: number;
  insuranceCoverage: number;
  outOfPocketCost: number;
}

export default function Home() {
  const [searchResults, setSearchResults] = useState<Procedure[]>([])

  const handleSearch = (results: Procedure[]) => {
    setSearchResults(results)
  }

  const handleProcedureClick = (procedure: string) => {
    // Simulating a search for the clicked procedure
    const results: Procedure[] = [
      { id: 1, name: procedure, location: "New York, NY", hospital: "NYC Medical", totalCostWithoutInsurance: 3000, insuranceCoverage: 2400, outOfPocketCost: 600 },
      { id: 2, name: procedure, location: "Los Angeles, CA", hospital: "LA Health Center", totalCostWithoutInsurance: 3500, insuranceCoverage: 2800, outOfPocketCost: 700 },
      { id: 3, name: procedure, location: "Chicago, IL", hospital: "Chicago General", totalCostWithoutInsurance: 2800, insuranceCoverage: 2240, outOfPocketCost: 560 },
    ]
    setSearchResults(results)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6">
      <section className="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Welcome to HealthCostClarity</h1>
        <p className="text-xl mb-8 text-gray-600">Discover and compare healthcare costs to make informed decisions about your health.</p>
      </section>
      <SearchForm onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Search Results</h2>
          <SearchResultsTable results={searchResults} />
        </section>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentInsights />
        <PopularProcedures onProcedureClick={handleProcedureClick} />
      </div>
      <CostSavingTips />
    </div>
  )
}

