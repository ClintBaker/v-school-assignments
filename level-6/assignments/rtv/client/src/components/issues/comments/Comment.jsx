import { useEffect } from 'react'

export default function Comment({ comment }) {
  useEffect(() => {
    console.log(comment)
  }, [])
  return (
    <div className="comment">
      <h4>Jim:</h4>
      <p>This sucks!</p>
    </div>
  )
}
