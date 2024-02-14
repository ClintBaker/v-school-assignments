import CreateIssue from './issues/CreateIssue'
import Issues from './issues/Issues'
import './issues/issues.css'

export default function Profile({ user, addIssue, issues, getUserIssues }) {
  return (
    <div className="center">
      <h2>Welcome, {user.username}</h2>
      <CreateIssue addIssue={addIssue} />
      <h3 className="issues_h3">My Issues:</h3>
      <Issues getUserIssues={getUserIssues} issues={issues} />
    </div>
  )
}
