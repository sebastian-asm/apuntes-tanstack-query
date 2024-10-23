import { useQuery } from '@tanstack/react-query'

import { getIssue, getIssueComments } from '../issues/actions'

export default function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
    retry: false
  })

  const issueCommentsQuery = useQuery({
    queryKey: ['issue', issueQuery.data?.number, 'comments'],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    staleTime: 1000 * 60,
    // ejecutar solo cuando se haya cargado el query anterior
    enabled: issueQuery.data !== undefined,
    retry: false
  })

  return { issueQuery, issueCommentsQuery }
}
