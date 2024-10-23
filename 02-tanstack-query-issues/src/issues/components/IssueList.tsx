import { GithubIssue } from '../interfaces'
import { IssueItem } from './IssueItem'

interface Props {
  issues: GithubIssue[]
}

export const IssueList = ({ issues }: Props) => {
  return (
    <>
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>
      <div className="mt-4 animate-fadeIn">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  )
}
