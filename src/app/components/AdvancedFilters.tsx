'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FilterProps {
  onFilterChange: (filters: FilterState) => void
}

interface FilterState {
  costRangeWithoutInsurance: [number, number]
  costRangeWithInsurance: [number, number]
  copaymentRange: [number, number]
  hospitalRanking: number
  dateRange: [string, string]
  postalCode: string
}

export default function AdvancedFilters({ onFilterChange }: FilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    costRangeWithoutInsurance: [0, 10000],
    costRangeWithInsurance: [0, 5000],
    copaymentRange: [0, 1000],
    hospitalRanking: 0,
    dateRange: ['', ''],
    postalCode: ''
  })

  const handleRangeChange = (key: keyof FilterState, value: [number, number]) => {
    setFilters({ ...filters, [key]: value })
  }

  const handleDateChange = (index: number, value: string) => {
    const newDateRange = [...filters.dateRange] as [string, string]
    newDateRange[index] = value
    setFilters({ ...filters, dateRange: newDateRange })
  }

  const handlePostalCodeChange = (value: string) => {
    setFilters({ ...filters, postalCode: value })
  }

  const applyFilters = () => {
    onFilterChange(filters)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center w-full text-left text-lg font-semibold mb-2"
      >
        Advanced Filters
        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isExpanded && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cost Range Without Insurance ($)</label>
            <Slider
              min={0}
              max={50000}
              step={100}
              value={filters.costRangeWithoutInsurance}
              onValueChange={(value) => handleRangeChange('costRangeWithoutInsurance', value as [number, number])}
              className="mb-1"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.costRangeWithoutInsurance[0]}</span>
              <span>${filters.costRangeWithoutInsurance[1]}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cost Range With Insurance ($)</label>
            <Slider
              min={0}
              max={25000}
              step={100}
              value={filters.costRangeWithInsurance}
              onValueChange={(value) => handleRangeChange('costRangeWithInsurance', value as [number, number])}
              className="mb-1"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.costRangeWithInsurance[0]}</span>
              <span>${filters.costRangeWithInsurance[1]}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Copayment Range ($)</label>
            <Slider
              min={0}
              max={2000}
              step={10}
              value={filters.copaymentRange}
              onValueChange={(value) => handleRangeChange('copaymentRange', value as [number, number])}
              className="mb-1"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.copaymentRange[0]}</span>
              <span>${filters.copaymentRange[1]}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <div className="flex space-x-2">
              <input
                type="date"
                value={filters.dateRange[0]}
                onChange={(e) => handleDateChange(0, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <input
                type="date"
                value={filters.dateRange[1]}
                onChange={(e) => handleDateChange(1, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              value={filters.postalCode}
              onChange={(e) => handlePostalCodeChange(e.target.value)}
              placeholder="Enter postal code"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
        </div>
      )}
    </div>
  )
}

