'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'MRI', averageCost: 1400, lowestCost: 1000, highestCost: 1800 },
  { name: 'CT Scan', averageCost: 1000, lowestCost: 700, highestCost: 1300 },
  { name: 'Colonoscopy', averageCost: 1900, lowestCost: 1500, highestCost: 2300 },
  { name: 'Knee Replacement', averageCost: 29000, lowestCost: 25000, highestCost: 33000 },
]

export default function ProcedureCostComparison() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="lowestCost" fill="#82ca9d" name="Lowest Cost" />
        <Bar dataKey="averageCost" fill="#8884d8" name="Average Cost" />
        <Bar dataKey="highestCost" fill="#ffc658" name="Highest Cost" />
      </BarChart>
    </ResponsiveContainer>
  )
}

