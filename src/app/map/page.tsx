import dynamic from 'next/dynamic'

const MapView = dynamic(() => import('../components/MapView'), { ssr: false })

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <MapView />
    </div>
  )
}

