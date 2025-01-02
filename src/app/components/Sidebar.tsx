import Link from 'next/link'
import { Search, BarChart2, Hospital, FileText, Info } from 'lucide-react'

const navItems = [
  { name: 'Search', icon: Search, href: '/' },
  { name: 'Insights', icon: BarChart2, href: '/insights' },
  { name: 'Hospitals', icon: Hospital, href: '/hospitals' },
  { name: 'Upload Bill', icon: FileText, href: '/upload' },
  { name: 'About', icon: Info, href: '/about' },
]

export default function Sidebar() {
  return (
    <nav className="bg-blue-100 text-blue-900 w-64 min-h-screen p-4">
      <div className="text-2xl font-bold mb-8 text-blue-800">HealthCostClarity</div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-200 transition-colors duration-200">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

