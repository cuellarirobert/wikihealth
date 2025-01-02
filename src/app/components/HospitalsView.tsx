'use client'

import { useState } from 'react'
import HospitalMap from './HospitalMap'
import HospitalSearch from './HospitalSearch'
import HospitalResultsTable from './HospitalResultsTable'

export interface Hospital {
  id: number
  name: string
  location: [number, number]
  address: string
  procedures: {
    name: string
    totalCostWithoutInsurance: number
    insuranceCoverage: number
    outOfPocketCost: number
  }[]
}

const mockHospitals: Hospital[] = [
  {
    id: 1,
    name: "Central Hospital",
    location: [40.7128, -74.0060],
    address: "123 Main St, New York, NY 10001",
    procedures: [
      { name: "MRI", totalCostWithoutInsurance: 1200, insuranceCoverage: 960, outOfPocketCost: 240 },
      { name: "CT Scan", totalCostWithoutInsurance: 800, insuranceCoverage: 640, outOfPocketCost: 160 },
      { name: "X-Ray", totalCostWithoutInsurance: 150, insuranceCoverage: 120, outOfPocketCost: 30 }
    ]
  },
  {
    id: 2,
    name: "Westside Medical Center",
    location: [40.7589, -73.9851],
    address: "456 West Ave, New York, NY 10018",
    procedures: [
      { name: "MRI", totalCostWithoutInsurance: 1300, insuranceCoverage: 1040, outOfPocketCost: 260 },
      { name: "CT Scan", totalCostWithoutInsurance: 850, insuranceCoverage: 680, outOfPocketCost: 170 },
      { name: "X-Ray", totalCostWithoutInsurance: 160, insuranceCoverage: 128, outOfPocketCost: 32 }
    ]
  },
  {
    id: 3,
    name: "Eastside Health Institute",
    location: [40.7681, -73.9546],
    address: "789 East Blvd, New York, NY 10065",
    procedures: [
      { name: "MRI", totalCostWithoutInsurance: 1150, insuranceCoverage: 920, outOfPocketCost: 230 },
      { name: "CT Scan", totalCostWithoutInsurance: 780, insuranceCoverage: 624, outOfPocketCost: 156 },
      { name: "X-Ray", totalCostWithoutInsurance: 140, insuranceCoverage: 112, outOfPocketCost: 28 }
    ]
  },
]

export default function HospitalsView() {
  const [hospitals, setHospitals] = useState<Hospital[]>(mockHospitals)
  const [selectedProcedure, setSelectedProcedure] = useState<string>('')

  const handleSearch = (searchTerm: string, procedure: string) => {
    const filtered = mockHospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (procedure === '' || hospital.procedures.some(p => p.name.toLowerCase() === procedure.toLowerCase()))
    )
    setHospitals(filtered)
    setSelectedProcedure(procedure)
  }

  return (
    <div className="space-y-6">
      <HospitalSearch onSearch={handleSearch} />
      <div className="h-[400px]">
        <HospitalMap hospitals={hospitals} selectedProcedure={selectedProcedure} />
      </div>
      <HospitalResultsTable hospitals={hospitals} selectedProcedure={selectedProcedure} />
    </div>
  )
}

