interface StateTableProps {
  stateId: string;
  data: {
    name: string;
    averageCost: number;
  };
}

export default function StateTable({ stateId, data }: StateTableProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{data.name} ({stateId}) Healthcare Data</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Average Cost</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${data.averageCost.toLocaleString()}</td>
          </tr>
          {/* Add more rows for additional state-specific healthcare data */}
        </tbody>
      </table>
    </div>
  )
}

