import { GithubIssue, State } from '../interfaces'
import { IssueItem } from './IssueItem'

interface Props {
  issues: GithubIssue[]
  state: State
  onStateChange: (state: State) => void
}

export const IssueList = ({ issues, state, onStateChange }: Props) => {
  return (
    <>
      <div className="flex gap-4">
        <button onClick={() => onStateChange(State.All)} className={`btn ${state === State.All ? 'active' : ''}`}>
          All
        </button>
        <button onClick={() => onStateChange(State.Open)} className={`btn ${state === State.Open ? 'active' : ''}`}>
          Open
        </button>
        <button onClick={() => onStateChange(State.Close)} className={`btn ${state === State.Close ? 'active' : ''}`}>
          Closed
        </button>
      </div>
      <div className="mt-4 animate-fadeIn">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  )
}
