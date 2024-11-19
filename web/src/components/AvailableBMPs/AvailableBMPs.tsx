interface Bmp {
  id: number
  name: string
  description: string
}

interface AvailableBmpsProps {
  bmps: Bmp[]
  onSelect: (bmp: Bmp) => void
}

const AvailableBmps = ({ bmps, onSelect }: AvailableBmpsProps) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select BMPs:</h2>
      <ul className="space-y-2">
        {bmps.map((bmp) => (
          <li key={bmp.id}>
            <button
              onClick={() => onSelect(bmp)}
              className="w-full text-left py-2 px-4 bg-white hover:bg-indigo-100 text-gray-800 rounded-md shadow-sm border border-gray-200"
            >
              {bmp.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AvailableBmps
