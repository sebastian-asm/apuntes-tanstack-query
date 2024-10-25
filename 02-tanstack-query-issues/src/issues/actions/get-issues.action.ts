import { githubApi } from '../../api'
import { GithubIssue, State } from '../interfaces'

export const getIssues = async (state: State, selectedLabels: string[], page: number): Promise<GithubIssue[]> => {
  const params = new URLSearchParams()
  if (state !== State.All) params.append('state', state)
  if (selectedLabels.length > 0) params.append('labels', selectedLabels.join(','))
  // paginación
  params.append('page', page.toString())
  params.append('per_page', '5')
  const { data } = await githubApi.get<GithubIssue[]>('/issues', { params })
  return data
}
