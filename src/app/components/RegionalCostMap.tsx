'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'

interface RegionalCostMapProps {
  procedure: string
}

const mockData = {
  'MRI': [
    { state: 'CA', cost: 1500 },
    { state: 'NY', cost: 1600 },
    { state: 'TX', cost: 1300 },
    { state: 'FL', cost: 1400 },
    { state: 'IL', cost: 1450 },
  ],
  'CT Scan': [
    { state: 'CA', cost: 1100 },
    { state: 'NY', cost: 1200 },
    { state: 'TX', cost: 900 },
    { state: 'FL', cost: 1000 },
    { state: 'IL', cost: 1050 },
  ],
  'Colonoscopy': [
    { state: 'CA', cost: 2000 },
    { state: 'NY', cost: 2100 },
    { state: 'TX', cost: 1800 },
    { state: 'FL', cost: 1900 },
    { state: 'IL', cost: 1950 },
  ],
  'Knee Replacement': [
    { state: 'CA', cost: 30000 },
    { state: 'NY', cost: 31000 },
    { state: 'TX', cost: 28000 },
    { state: 'FL', cost: 29000 },
    { state: 'IL', cost: 29500 },
  ],
}

export default function RegionalCostMap({ procedure }: RegionalCostMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-98.5795, 39.8283], // Center of the US
      zoom: 3
    })

    map.current.addControl(new mapboxgl.NavigationControl())
  }, [])

  useEffect(() => {
    if (!map.current) return

    const data = mockData[procedure as keyof typeof mockData]

    // Update choropleth map based on selected procedure
    map.current.on('load', () => {
      if (!map.current) return

      // Add source and layer here
      // This is a simplified example and would need to be expanded with real data and proper GeoJSON
      map.current.addSource('states', {
        type: 'geojson',
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
      })

      map.current.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'cost'],
            data[0].cost,
            '#ffffcc',
            data[data.length - 1].cost,
            '#253494'
          ],
          'fill-opacity': 0.7
        }
      })
    })
  }, [procedure])

  return <div ref={mapContainer} className="w-full h-[400px] rounded-lg" />
}

