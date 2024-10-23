import { githubApi } from '../../api'
import { GithubIssue } from '../interfaces'

export const getIssue = async (issueNumber: number): Promise<GithubIssue> => {
  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`)
  return data
}
