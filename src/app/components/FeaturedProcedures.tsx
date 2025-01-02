interface FeaturedProceduresProps {
  onSelect: (procedure: string) => void;
}

const featuredProcedures = [
  { id: 1, name: 'MRI Scan', averageCost: '$1,200 - $3,000' },
  { id: 2, name: 'Colonoscopy', averageCost: '$1,500 - $4,000' },
  { id: 3, name: 'Knee Replacement', averageCost: '$20,000 - $50,000' },
]

export default function FeaturedProcedures({ onSelect }: FeaturedProceduresProps) {
  return (
    <div className="space-y-4">
      {featuredProcedures.map((procedure) => (
        <div 
          key={procedure.id} 
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => onSelect(procedure.name)}
        >
          <h3 className="text-lg font-semibold mb-2">{procedure.name}</h3>
          <p className="text-gray-600">Average Cost: {procedure.averageCost}</p>
        </div>
      ))}
    </div>
  )
}

