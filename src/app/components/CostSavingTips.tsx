import { LightbulbIcon } from 'lucide-react'

const tips = [
  "Compare prices across different healthcare providers",
  "Ask about cash pay discounts",
  "Check if you're eligible for financial assistance programs",
  "Consider outpatient facilities for certain procedures",
  "Review your medical bills carefully for errors",
]

export default function CostSavingTips() {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Cost Saving Tips</h2>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start space-x-4">
            <LightbulbIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-blue-900">{tip}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

