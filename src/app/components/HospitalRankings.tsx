'use client'

import { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import HospitalBills from './HospitalBills'

interface Hospital {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
}

const hospitals: Hospital[] = [
  { id: 1, name: "Mayo Clinic", location: "Rochester, MN", rating: 5, specialties: ["Cardiology", "Oncology", "Neurology"] },
  { id: 2, name: "Cleveland Clinic", location: "Cleveland, OH", rating: 4.5, specialties: ["Cardiology", "Orthopedics", "Rheumatology"] },
  { id: 3, name: "Johns Hopkins Hospital", location: "Baltimore, MD", rating: 4.5, specialties: ["Oncology", "Neurology", "Psychiatry"] },
  { id: 4, name: "Massachusetts General Hospital", location: "Boston, MA", rating: 4, specialties: ["Endocrinology", "Gastroenterology", "Urology"] },
]

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i + fullStars} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  )
}

export default function HospitalRankings() {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null)

  const handleHospitalClick = (hospital: Hospital) => {
    setSelectedHospital(hospital)
  }

  if (selectedHospital) {
    return <HospitalBills hospital={selectedHospital} onBack={() => setSelectedHospital(null)} />
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Top Ranked Hospitals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hospitals.map((hospital) => (
          <div 
            key={hospital.id} 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg"
            onClick={() => handleHospitalClick(hospital)}
          >
            <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
            <p className="text-gray-600 mb-2">{hospital.location}</p>
            <div className="flex items-center mb-2">
              <RatingStars rating={hospital.rating} />
              <span className="ml-2 text-gray-600">({hospital.rating})</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Top Specialties:</h4>
              <ul className="list-disc list-inside">
                {hospital.specialties.map((specialty, index) => (
                  <li key={index} className="text-gray-600">{specialty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

