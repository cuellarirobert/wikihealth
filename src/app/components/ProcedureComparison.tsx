import { ArrowLeft } from 'lucide-react'

interface ProcedureComparisonProps {
  procedure: string;
  onBack: () => void;
}

interface ProcedureData {
  id: number;
  hospital: string;
  location: string;
  hospitalRank: number;
  cost: number;
}

const mockProcedureData: Record<string, ProcedureData[]> = {
  'MRI Scan': [
    { id: 1, hospital: "Mayo Clinic", location: "Rochester, MN", hospitalRank: 5, cost: 1200 },
    { id: 2, hospital: "Cleveland Clinic", location: "Cleveland, OH", hospitalRank: 4.5, cost: 1500 },
    { id: 3, hospital: "Johns Hopkins Hospital", location: "Baltimore, MD", hospitalRank: 4.5, cost: 1800 },
    { id: 4, hospital: "Massachusetts General Hospital", location: "Boston, MA", hospitalRank: 4, cost: 2000 },
    { id: 5, hospital: "UCSF Medical Center", location: "San Francisco, CA", hospitalRank: 4, cost: 2500 },
  ],
  'Colonoscopy': [
    { id: 1, hospital: "Mayo Clinic", location: "Rochester, MN", hospitalRank: 5, cost: 2000 },
    { id: 2, hospital: "Cleveland Clinic", location: "Cleveland, OH", hospitalRank: 4.5, cost: 2200 },
    { id: 3, hospital: "Johns Hopkins Hospital", location: "Baltimore, MD", hospitalRank: 4.5, cost: 2500 },
    { id: 4, hospital: "Massachusetts General Hospital", location: "Boston, MA", hospitalRank: 4, cost: 2800 },
    { id: 5, hospital: "UCSF Medical Center", location: "San Francisco, CA", hospitalRank: 4, cost: 3000 },
  ],
  'Knee Replacement': [
    { id: 1, hospital: "Mayo Clinic", location: "Rochester, MN", hospitalRank: 5, cost: 30000 },
    { id: 2, hospital: "Cleveland Clinic", location: "Cleveland, OH", hospitalRank: 4.5, cost: 32000 },
    { id: 3, hospital: "Johns Hopkins Hospital", location: "Baltimore, MD", hospitalRank: 4.5, cost: 35000 },
    { id: 4, hospital: "Massachusetts General Hospital", location: "Boston, MA", hospitalRank: 4, cost: 38000 },
    { id: 5, hospital: "UCSF Medical Center", location: "San Francisco, CA", hospitalRank: 4, cost: 40000 },
  ],
}

export default function ProcedureComparison({ procedure, onBack }: ProcedureComparisonProps) {
  const procedureData = mockProcedureData[procedure] || []

  return (
    <div className="my-12">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Featured Procedures
      </button>
      <h2 className="text-2xl font-bold mb-6">{procedure} - Cost Comparison</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {procedureData.map((data) => (
                <tr key={data.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.hospital}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.hospitalRank}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.cost.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

