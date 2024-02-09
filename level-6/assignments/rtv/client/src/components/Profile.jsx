import CreateIssue from './issues/CreateIssue'
import Issues from './issues/Issues'
import './issues/issues.css'

export default function Profile({ user, addIssue, issues, getUserIssues }) {
  return (
    <div className="center">
      <h2>Welcome, {user.username}</h2>
      <CreateIssue addIssue={addIssue} />
      <Issues getUserIssues={getUserIssues} issues={issues} />
    </div>
  )
}
