import { FiRefreshCcw } from 'react-icons/fi'

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin">
        <FiRefreshCcw size={20} />
      </div>
    </div>
  )
}
