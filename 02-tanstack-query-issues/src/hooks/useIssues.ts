import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getIssues } from '../issues/actions'
import { State } from '../issues/interfaces'

export default function useIssues(state: State, selectedLabels: string[]) {
  const [page, setPage] = useState(1)

  useEffect(() => setPage(1), [state])
  useEffect(() => setPage(1), [selectedLabels])

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60
  })

  const prevPage = () => {
    if (page === 1) return
    // el callback del set se recomiendar usar cuando hay effect involucrados
    setPage((prevPage) => prevPage - 1)
  }

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return
    setPage(page + 1)
  }

  return { issuesQuery, page, prevPage, nextPage }
}
