import { TrendingUp, DollarSign, MapPin } from 'lucide-react'

const insights = [
  { id: 1, type: 'trend', text: 'MRI costs are 15% lower in rural areas compared to urban centers.' },
  { id: 2, type: 'saving', text: 'Average out-of-pocket costs for colonoscopies decreased by $200 this year.' },
  { id: 3, type: 'location', text: 'New York City has the highest variation in knee replacement costs.' },
]

export default function RecentInsights() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'trend':
        return <TrendingUp className="w-6 h-6 text-blue-500" />
      case 'saving':
        return <DollarSign className="w-6 h-6 text-green-500" />
      case 'location':
        return <MapPin className="w-6 h-6 text-red-500" />
      default:
        return null
    }
  }

  return (
    <section className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Recent Insights</h2>
      <div className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="bg-blue-50 rounded-lg p-4 flex items-start">
            <div className="mr-4 mt-1">{getIcon(insight.type)}</div>
            <p className="text-blue-900">{insight.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

