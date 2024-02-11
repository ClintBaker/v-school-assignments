import { useEffect } from 'react'

export default function Comment({ comment }) {
  useEffect(() => {
    console.log(comment)
  }, [])
  return (
    <div className="comment">
      <h4>{comment.user.username}:</h4>
      <p>{comment.text}</p>
    </div>
  )
}
