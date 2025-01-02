'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Out-of-pocket', value: 20 },
  { name: 'Insurance Coverage', value: 80 },
]

const COLORS = ['#0088FE', '#00C49F']

export default function InsuranceImpactAnalysis() {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        On average, insurance coverage significantly reduces out-of-pocket expenses for medical procedures. 
        The chart below shows the typical breakdown of costs for insured patients.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 text-center">
        Note: This is an average representation. Actual coverage may vary based on individual insurance plans and procedures.
      </p>
    </div>
  )
}

