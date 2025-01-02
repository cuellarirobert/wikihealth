'use client'

import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
// import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'

// Mock data for healthcare procedures
const mockProcedures = [
  { id: 1, procedure: 'MRI Scan', location: [40.7128, -74.0060], cost: '$1,200 - $3,000' },
  { id: 2, procedure: 'Colonoscopy', location: [34.0522, -118.2437], cost: '$1,500 - $4,000' },
  { id: 3, procedure: 'Knee Replacement', location: [41.8781, -87.6298], cost: '$20,000 - $50,000' },
  { id: 4, procedure: 'CT Scan', location: [29.7604, -95.3698], cost: '$500 - $1,500' },
  { id: 5, procedure: 'Cataract Surgery', location: [25.7617, -80.1918], cost: '$3,000 - $7,000' },
]

// NOTE: This is a demo token for development purposes only.
// In a production environment, use your own Mapbox access token.
mapboxgl.accessToken = 'pk.eyJ1IjoicmN1ZWxsYXJpIiwiYSI6ImNtNWFiYWF3bjBndzAycHB1enZxcHdkbGcifQ.Xr9kY05A9gmLdhj0Fyop7g';

export default function SearchMap() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(mockProcedures)
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-98.5795, 39.8283], // Geographic center of contiguous US
      zoom: 17
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl())

    // Add markers for each procedure
    results.forEach((result) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(result.location)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${result.procedure}</h3><p>${result.cost}</p>`))
        .addTo(map.current!)
    })
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Filter results based on the query
    const filteredResults = mockProcedures.filter(item => 
      item.procedure.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filteredResults)

    Update map markers
    if (map.current) {
      // Remove existing markers
      const markers = document.getElementsByClassName('mapboxgl-marker')
      while(markers[0]) {
        markers[0].parentNode?.removeChild(markers[0])
      }

      // Add new markers
      filteredResults.forEach((result) => {
        new mapboxgl.Marker()
          .setLngLat(result.location)
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${result.procedure}</h3><p>${result.cost}</p>`))
          .addTo(map.current!)
      })

      // Fit map to show all markers
      if (filteredResults.length > 0) {
        const bounds = new mapboxgl.LngLatBounds()
        filteredResults.forEach(result => bounds.extend(result.location))
        map.current.fitBounds(bounds, { padding: 50, maxZoom: 17 })
      }
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="bg-blue-600 p-4">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a medical procedure..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-2 text-gray-600 hover:text-blue-600">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-2/3 h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">Map placeholder</p>
        </div>
        <div className="w-1/3 h-full overflow-y-auto p-4 bg-white">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          {results.map((result) => (
            <div key={result.id} className="mb-4 p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{result.procedure}</h3>
              <p className="text-gray-600">Cost: {result.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

