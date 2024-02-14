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
      <div className="issues">
        {issues &&
          issues.map((issue) => (
            <Issue issue={issue} {...issue} key={issue._id} />
          ))}
      </div>
    </>
  )
}
