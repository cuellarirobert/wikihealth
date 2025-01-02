import { ArrowLeft } from 'lucide-react'

interface Bill {
  id: number;
  procedure: string;
  cost: number;
  date: string;
}

interface Hospital {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
}

interface HospitalBillsProps {
  hospital: Hospital;
  onBack: () => void;
}

// Mock data for hospital bills
const mockBills: Bill[] = [
  { id: 1, procedure: "MRI Scan", cost: 1200, date: "2023-05-15" },
  { id: 2, procedure: "Colonoscopy", cost: 2500, date: "2023-06-02" },
  { id: 3, procedure: "Blood Test", cost: 150, date: "2023-06-10" },
  { id: 4, procedure: "X-Ray", cost: 300, date: "2023-06-18" },
  { id: 5, procedure: "Physical Therapy Session", cost: 100, date: "2023-06-25" },
  { id: 6, procedure: "CT Scan", cost: 1800, date: "2023-07-03" },
  { id: 7, procedure: "Endoscopy", cost: 1500, date: "2023-07-12" },
  { id: 8, procedure: "Mammogram", cost: 250, date: "2023-07-20" },
]

export default function HospitalBills({ hospital, onBack }: HospitalBillsProps) {
  return (
    <div className="my-12">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Hospital Rankings
      </button>
      <h2 className="text-2xl font-bold mb-2">{hospital.name}</h2>
      <p className="text-gray-600 mb-6">{hospital.location}</p>
      <h3 className="text-xl font-semibold mb-4">Recent Bills</h3>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Procedure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockBills.map((bill) => (
                <tr key={bill.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.procedure}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bill.cost.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

