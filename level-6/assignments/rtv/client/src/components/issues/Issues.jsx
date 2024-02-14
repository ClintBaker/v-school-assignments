import { useEffect } from 'react'
import Issue from './Issue'

export default function Issues({ issues, getUserIssues }) {
  useEffect(() => {
    // on component load, get user issues
    getUserIssues()
    console.log('GETTING ISSUES')
  }, [])

  return (
    <>
      <h3 className="issues_h3">My Issues:</h3>
      <div className="issues">
        {issues &&
          issues.map((issue) => (
            <Issue issue={issue} {...issue} key={issue._id} />
          ))}
      </div>
    </>
  )
}
