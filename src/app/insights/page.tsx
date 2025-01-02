'use client'

import { useState } from 'react'
import CostTrendChart from '../components/CostTrendChart'
import ProcedureCostComparison from '../components/ProcedureCostComparison'
import RegionalCostMap from '../components/RegionalCostMap'
import InsuranceImpactAnalysis from '../components/InsuranceImpactAnalysis'
import TopSavingsTips from '../components/TopSavingsTips'

export default function InsightsPage() {
  const [selectedProcedure, setSelectedProcedure] = useState('MRI')
  const procedures = ['MRI', 'CT Scan', 'Colonoscopy', 'Knee Replacement']

  return (
    <div className="max-w-7xl mx-auto space-y-12 py-8">
      <h1 className="text-4xl font-bold text-blue-800">Healthcare Cost Insights</h1>
      
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Cost Trends Over Time</h2>
        <div className="mb-4">
          <label htmlFor="procedure-select" className="block text-sm font-medium text-gray-700 mb-2">Select Procedure:</label>
          <select
            id="procedure-select"
            value={selectedProcedure}
            onChange={(e) => setSelectedProcedure(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {procedures.map((procedure) => (
              <option key={procedure} value={procedure}>{procedure}</option>
            ))}
          </select>
        </div>
        <CostTrendChart procedure={selectedProcedure} />
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Procedure Cost Comparison</h2>
        <ProcedureCostComparison />
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Regional Cost Variations</h2>
        <RegionalCostMap procedure={selectedProcedure} />
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Insurance Impact Analysis</h2>
        <InsuranceImpactAnalysis />
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Top Money-Saving Tips</h2>
        <TopSavingsTips />
      </section>
    </div>
  )
}

