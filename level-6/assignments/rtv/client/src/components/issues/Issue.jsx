import { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import axios from 'axios'

export default function Issue({
  issue,
  totalVotes,
  comments,
  upvotes,
  downvotes,
  title,
  description,
  _id,
}) {
  const [commentToggle, setCommentToggle] = useState(false)
  const [commentFormData, setCommentFormData] = useState({ comment: '' })

  useEffect(() => {
    // const hasUpvoted = upvotes.find(id => )
    // hasDownvoted
    console.log(issue)
  }, [])

  function handleSubmitComment() {
    const comment = commentFormData.comment
    // async call to axios to post comment
    async function submitComment(comment) {
      const newComment = axios.post(`/api/api/issue/${_id}/comment`, {
        text: comment,
      })

      // if success we need to reload the page
    }
    submitComment()
  }

  function handleCommentFormChange(e) {
    // handle inputs for comment form
    const { name, value } = e.target
    setCommentFormData((prevCommentFormData) => ({
      ...prevCommentFormData,
      [name]: value,
    }))
  }

  function submitCommentForm() {
    // beam up the comment
  }

  function toggleComment() {
    setCommentToggle((prevCommentToggle) => !prevCommentToggle)
  }
  return (
    <div className="issue card">
      <h3 className="issue_title">{title}</h3>
      <p className="issue_description">{description}</p>
      <div className="issue_buttons">
        <div className="issue_arrows">
          <span>{totalVotes} </span>
          <button className="issue_btn">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button className="issue_btn">
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <button onClick={toggleComment} className="issue_btn">
          {commentToggle ? 'X' : 'Comments'}
        </button>
      </div>
      {commentToggle && (
        <CommentForm
          handleCommentFormChange={handleCommentFormChange}
          commentFormData={commentFormData}
          handleSubmitComment={handleSubmitComment}
        />
      )}
    </div>
  )
}