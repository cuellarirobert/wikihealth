'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface HospitalSearchProps {
  onSearch: (searchTerm: string, procedure: string) => void
}

export default function HospitalSearch({ onSearch }: HospitalSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [procedure, setProcedure] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm, procedure)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div className="flex space-x-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Enter procedure (optional)"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            className="w-full"
          />
        </div>
        <Button type="submit" className="bg-blue-600 text-white">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>
    </form>
  )
}

