import { useIssues } from '../../hooks'
import { Loading } from '../../shared'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'

export const ListView = () => {
  const { issuesQuery } = useIssues()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? <Loading /> : <IssueList issues={issuesQuery.data ?? []} />}
      </div>
      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  )
}
