import Issue from './Issue'

export default function Issues({ issues }) {
  return (
    <>
      <h3 className="issues_h3">My Issues:</h3>
      <div className="issues">
        {issues.map((issue) => (
          <Issue {...issue} key={issue._id} />
        ))}
      </div>
    </>
  )
}
