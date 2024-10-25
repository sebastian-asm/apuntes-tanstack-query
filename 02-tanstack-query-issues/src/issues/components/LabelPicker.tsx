import { useLabels } from '../../hooks'
import { Loading } from '../../shared'

interface Props {
  selectedLabels: string[]
  onLabelSelected: (label: string) => void
}

export const LabelPicker = ({ selectedLabels, onLabelSelected }: Props) => {
  const { labelsQuery } = useLabels()
  if (labelsQuery.isLoading) return <Loading />

  return (
    labelsQuery.data && (
      <div className="flex flex-wrap gap-2">
        {labelsQuery.data?.map((label) => (
          <span
            key={label.id}
            onClick={() => onLabelSelected(label.name)}
            className={`
              ${selectedLabels.includes(label.name) ? 'selected-label' : ''}
              animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
            `}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          >
            {label.name}
          </span>
        ))}
      </div>
    )
  )
}
