import CreateIssue from './issues/CreateIssue'

export default function Profile({ user, addIssue }) {
  return (
    <div className="center">
      <h2>Welcome, {user.username}</h2>
      <CreateIssue addIssue={addIssue} />
    </div>
  )
}
