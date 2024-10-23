import { useLabels } from '../../hooks'
import { Loading } from '../../shared'

export const LabelPicker = () => {
  const { labelsQuery } = useLabels()
  if (labelsQuery.isLoading) return <Loading />

  return (
    labelsQuery.data && (
      <div className="flex flex-wrap gap-2">
        {labelsQuery.data?.map((label) => (
          <span
            key={label.id}
            className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          >
            {label.name}
          </span>
        ))}
      </div>
    )
  )
}
