import { Hospital } from './HospitalsView'

interface HospitalListProps {
  hospitals: Hospital[]
  selectedProcedure: string
}

export default function HospitalList({ hospitals, selectedProcedure }: HospitalListProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-h-[600px] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Hospital List</h2>
      <ul className="space-y-4">
        {hospitals.map((hospital) => (
          <li key={hospital.id} className="border-b pb-4 last:border-b-0">
            <h3 className="text-lg font-semibold">{hospital.name}</h3>
            <p className="text-gray-600">{hospital.address}</p>
            {selectedProcedure && hospital.procedures[selectedProcedure] && (
              <p className="text-blue-600 font-medium mt-2">
                {selectedProcedure}: ${hospital.procedures[selectedProcedure]}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

