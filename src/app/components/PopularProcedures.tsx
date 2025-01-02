import { Stethoscope } from 'lucide-react'

const popularProcedures = [
  { id: 1, name: 'MRI Scan', averageCost: '$1,200 - $3,000' },
  { id: 2, name: 'Colonoscopy', averageCost: '$1,500 - $4,000' },
  { id: 3, name: 'Knee Replacement', averageCost: '$20,000 - $50,000' },
  { id: 4, name: 'CT Scan', averageCost: '$500 - $1,500' },
  { id: 5, name: 'Annual Physical', averageCost: '$150 - $300' },
]

interface PopularProceduresProps {
  onProcedureClick: (procedure: string) => void;
}

export default function PopularProcedures({ onProcedureClick }: PopularProceduresProps) {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Popular Procedures</h2>
      <ul className="space-y-4">
        {popularProcedures.map((procedure) => (
          <li 
            key={procedure.id} 
            className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-200"
            onClick={() => onProcedureClick(procedure.name)}
          >
            <Stethoscope className="w-6 h-6 text-blue-500" />
            <div>
              <h3 className="font-semibold text-blue-900">{procedure.name}</h3>
              <p className="text-sm text-blue-700">Average Cost: {procedure.averageCost}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

