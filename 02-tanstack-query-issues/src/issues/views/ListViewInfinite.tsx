import { useState } from 'react'

import { useIssuesInfinite } from '../../hooks'
import { Loading } from '../../shared'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { State } from '../interfaces'

export const ListViewInfinite = () => {
  const [state, setState] = useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { issuesQuery } = useIssuesInfinite(state, selectedLabels)

  const onLabelSelected = (label: string) => {
    if (selectedLabels.includes(label)) setSelectedLabels(selectedLabels.filter((l) => l !== label))
    else setSelectedLabels([...selectedLabels, label])
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <Loading />
        ) : (
          <>
            <IssueList issues={issuesQuery.data?.pages.flat() ?? []} state={state} onStateChange={setState} />
            <div className="flex justify-center items-center">
              <button
                onClick={() => issuesQuery.fetchNextPage()}
                disabled={issuesQuery.isFetchingNextPage}
                className="py-2 px-4 bg-blue-500 rounded-md hover:bg-blue-700 transition-all"
              >
                {issuesQuery.isFetchingNextPage ? 'Cargando...' : 'Cargar más'}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="col-span-1 px-2">
        <LabelPicker selectedLabels={selectedLabels} onLabelSelected={onLabelSelected} />
      </div>
    </div>
  )
}
