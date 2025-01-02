'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface CostTrendChartProps {
  procedure: string
}

const mockData = {
  'MRI': [
    { year: 2018, cost: 1200 },
    { year: 2019, cost: 1250 },
    { year: 2020, cost: 1300 },
    { year: 2021, cost: 1350 },
    { year: 2022, cost: 1400 },
  ],
  'CT Scan': [
    { year: 2018, cost: 800 },
    { year: 2019, cost: 850 },
    { year: 2020, cost: 900 },
    { year: 2021, cost: 950 },
    { year: 2022, cost: 1000 },
  ],
  'Colonoscopy': [
    { year: 2018, cost: 1500 },
    { year: 2019, cost: 1600 },
    { year: 2020, cost: 1700 },
    { year: 2021, cost: 1800 },
    { year: 2022, cost: 1900 },
  ],
  'Knee Replacement': [
    { year: 2018, cost: 25000 },
    { year: 2019, cost: 26000 },
    { year: 2020, cost: 27000 },
    { year: 2021, cost: 28000 },
    { year: 2022, cost: 29000 },
  ],
}

export default function CostTrendChart({ procedure }: CostTrendChartProps) {
  const data = mockData[procedure as keyof typeof mockData]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cost" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

