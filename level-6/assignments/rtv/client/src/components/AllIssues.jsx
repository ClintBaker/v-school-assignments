import Issues from './issues/Issues'
import './issues/issues.css'

export default function AllIssues({ user, addIssue, issues, getUserIssues }) {
  return (
    <div className="center">
      <h2>All Issues</h2>
      <Issues getUserIssues={getUserIssues} issues={issues} />
    </div>
  )
}
