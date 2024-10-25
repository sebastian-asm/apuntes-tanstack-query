import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'

import { GithubIssue, State } from '../interfaces'
import { timeSince } from '../../helpers'
// import { getIssue, getIssueComments } from '../actions'

interface Props {
  issue: GithubIssue
}

export const IssueItem = ({ issue }: Props) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  // obteniendo los datos al momento de hacer hover con el mouse
  // const prefetchData = () => {
  //   queryClient.prefetchQuery({
  //     queryKey: ['issue', issue.number],
  //     queryFn: () => getIssue(issue.number),
  //     staleTime: 1000 * 60
  //   })

  //   queryClient.prefetchQuery({
  //     queryKey: ['issue', issue.number, 'comments'],
  //     queryFn: () => getIssueComments(issue.number),
  //     staleTime: 1000 * 60
  //   })
  // }

  // asignando la data a una key
  const presetData = () => {
    queryClient.setQueryData(['issue', issue.number], issue, {
      updatedAt: Date.now() + 1000 * 60
    })
  }

  return (
    <div
      onMouseEnter={presetData}
      // onMouseEnter={prefetchData}
      className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800"
    >
      {issue.state === State.Close ? (
        <FiCheckCircle size={30} color="green" className="min-w-10" />
      ) : (
        <FiInfo size={30} color="red" className="min-w-10" />
      )}
      <div className="flex flex-col flex-grow px-2">
        <a onClick={() => navigate(`/issues/issue/${issue.number}`)} className="cursor-pointer hover:underline">
          {issue.title}
        </a>
        <span className="text-gray-500">
          #{issue.number} opened {timeSince(issue.created_at)} ago by{' '}
          <span className="font-bold">{issue.user.login}</span>
        </span>
        <div className="mt-2">
          {issue.labels.map((label) => (
            <small
              key={label.id}
              className="p-1 mr-2 text-gray-200 rounded"
              style={{ border: `1px solid #${label.color}` }}
            >
              {label.name}
            </small>
          ))}
        </div>
      </div>
      <img src={issue.user.avatar_url} alt="User Avatar" className="w-8 h-8 rounded-full" />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issue.comments}</span>
      </div>
    </div>
  )
}
