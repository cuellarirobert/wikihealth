'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Hospital } from './HospitalsView'

mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'

interface HospitalMapProps {
  hospitals: Hospital[]
  selectedProcedure: string
}

export default function HospitalMap({ hospitals, selectedProcedure }: HospitalMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-74.0060, 40.7128], // New York City coordinates
      zoom: 11
    })

    map.current.addControl(new mapboxgl.NavigationControl())
  }, [])

  useEffect(() => {
    if (!map.current) return

    // Remove existing markers
    const markers = document.getElementsByClassName('mapboxgl-marker')
    while(markers[0]) {
      markers[0].remove()
    }

    // Add new markers
    hospitals.forEach((hospital) => {
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url(https://placekitten.com/g/40/40)'
      el.style.width = '40px'
      el.style.height = '40px'
      el.style.backgroundSize = '100%'
      el.style.borderRadius = '50%'

      const procedure = hospital.procedures.find(p => p.name === selectedProcedure)
      const popupContent = `
        <h3>${hospital.name}</h3>
        <p>${hospital.address}</p>
        ${procedure ? `
          <p>${procedure.name}</p>
          <p>Total Cost: $${procedure.totalCostWithoutInsurance}</p>
          <p>Insurance Coverage: $${procedure.insuranceCoverage}</p>
          <p>Out-of-Pocket: $${procedure.outOfPocketCost}</p>
        ` : ''}
      `

      new mapboxgl.Marker(el)
        .setLngLat(hospital.location)
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map.current!)
    })

    // Fit map to show all markers
    if (hospitals.length > 0) {
      const bounds = new mapboxgl.LngLatBounds()
      hospitals.forEach(hospital => bounds.extend(hospital.location))
      map.current.fitBounds(bounds, { padding: 50 })
    }
  }, [hospitals, selectedProcedure])

  return <div ref={mapContainer} className="w-full h-full rounded-lg shadow-md" />
}

