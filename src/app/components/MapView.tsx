'use client'

import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import StateTable from './StateTable'
import FeaturedProcedures from './FeaturedProcedures'

mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'

interface StateData {
  [key: string]: {
    name: string;
    averageCost: number;
  }
}

const mockStateData: StateData = {
  'CA': { name: 'California', averageCost: 2500 },
  'NY': { name: 'New York', averageCost: 3000 },
  'TX': { name: 'Texas', averageCost: 2000 },
  // Add more states as needed
}

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-98.5795, 39.8283], // Center of the US
      zoom: 3
    })

    map.current.on('load', () => {
      map.current!.addSource('states', {
        type: 'vector',
        url: 'mapbox://mapbox.us-states-v1'
      })

      map.current!.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        'source-layer': 'states',
        paint: {
          'fill-color': 'rgba(200, 100, 240, 0.4)',
          'fill-outline-color': 'rgba(200, 100, 240, 1)'
        }
      })

      map.current!.addLayer({
        id: 'state-borders',
        type: 'line',
        source: 'states',
        'source-layer': 'states',
        paint: {
          'line-color': '#627BC1',
          'line-width': 2
        }
      })

      map.current!.on('click', 'state-fills', (e) => {
        if (e.features && e.features[0].properties) {
          setSelectedState(e.features[0].properties.STATE_ID)
        }
      })
    })

    map.current.addControl(new mapboxgl.NavigationControl())

  }, [])

  useEffect(() => {
    if (!map.current || !selectedProcedure) return

    // Update choropleth map based on selected procedure
    map.current.setPaintProperty('state-fills', 'fill-color', [
      'interpolate',
      ['linear'],
      ['get', 'averageCost'],
      1000, '#ffffcc',
      2000, '#a1dab4',
      3000, '#41b6c4',
      4000, '#2c7fb8',
      5000, '#253494'
    ])
  }, [selectedProcedure])

  const handleProcedureSelect = (procedure: string) => {
    setSelectedProcedure(procedure)
    setSelectedState(null)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-grow flex">
        <div ref={mapContainer} className="w-3/4 h-full" />
        <div className="w-1/4 p-4 bg-white overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Featured Procedures</h2>
          <FeaturedProcedures onSelect={handleProcedureSelect} />
        </div>
      </div>
      {selectedState && (
        <div className="h-1/3 overflow-y-auto bg-white p-4 border-t">
          <StateTable stateId={selectedState} data={mockStateData[selectedState]} />
        </div>
      )}
    </div>
  )
}

