import { FileText } from 'lucide-react'

const recentUploads = [
  { id: 1, procedure: 'Annual Physical', location: 'Boston, MA', cost: '$200' },
  { id: 2, procedure: 'Dental Cleaning', location: 'Seattle, WA', cost: '$150' },
  { id: 3, procedure: 'X-Ray', location: 'Denver, CO', cost: '$300' },
]

export default function RecentUploads() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentUploads.map((upload) => (
          <div key={upload.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">{upload.procedure}</h3>
            </div>
            <p className="text-gray-600 mb-2">Location: {upload.location}</p>
            <p className="text-blue-600 font-semibold">Cost: {upload.cost}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

