import { useInfiniteQuery } from '@tanstack/react-query'

import { getIssues } from '../issues/actions'
import { State } from '../issues/interfaces'

export default function useIssuesInfinite(state: State, selectedLabels: string[]) {
  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinite', { state, selectedLabels }],
    queryFn: ({ pageParam }) => getIssues(state, selectedLabels, pageParam),
    staleTime: 1000 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => (lastPage.length > 0 ? pages.length + 1 : undefined)
  })

  return { issuesQuery }
}
