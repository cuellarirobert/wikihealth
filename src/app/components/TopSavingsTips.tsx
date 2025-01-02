const tips = [
  {
    title: "Compare Prices",
    description: "Always compare prices from different healthcare providers for the same procedure. Costs can vary significantly."
  },
  {
    title: "Negotiate Bills",
    description: "Don't be afraid to negotiate your medical bills, especially if you're paying out of pocket."
  },
  {
    title: "Use In-Network Providers",
    description: "Stick to in-network providers to minimize your out-of-pocket expenses."
  },
  {
    title: "Ask About Cash Discounts",
    description: "Some providers offer discounts for paying in cash. Always ask if this option is available."
  },
  {
    title: "Review Your Bills",
    description: "Carefully review your medical bills for errors. Overcharges and duplicate charges are not uncommon."
  }
]

export default function TopSavingsTips() {
  return (
    <ul className="space-y-4">
      {tips.map((tip, index) => (
        <li key={index} className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">{tip.title}</h3>
          <p className="text-gray-700">{tip.description}</p>
        </li>
      ))}
    </ul>
  )
}

