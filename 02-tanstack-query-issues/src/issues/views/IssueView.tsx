import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FiSkipBack } from 'react-icons/fi'

import { IssueComment } from '../components/IssueComment'
import { useIssue } from '../../hooks'
import { Loading } from '../../shared'

export const IssueView = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { issueQuery, issueCommentsQuery } = useIssue(Number(params.id ?? 0))

  if (issueQuery.isLoading) return <Loading />
  if (!issueQuery.data) return <Navigate to="/404" />

  return (
    <div className="animate-fadeIn mb-5">
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="hover:underline text-blue-400 flex items-center">
          <FiSkipBack className="mr-1.5" />
          Regresar
        </button>
      </div>
      <IssueComment issue={issueQuery.data} />
      {issueCommentsQuery.isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>Comments</h2>
          {issueCommentsQuery.data?.map((comment) => (
            <IssueComment key={comment.id} issue={comment} />
          ))}
        </>
      )}
    </div>
  )
}
