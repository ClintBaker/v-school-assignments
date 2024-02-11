import { useContext, useEffect, useState } from 'react'
import CommentForm from './comments/CommentForm'
import axios from 'axios'
import { UserContext } from '../../context/UserProvider'
import Comments from './comments/Comments'

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

  const { addComment } = useContext(UserContext)

  function handleSubmitComment() {
    const comment = commentFormData.comment
    // async call to axios to post comment
    addComment(_id, comment)
  }

  function handleCommentFormChange(e) {
    // handle inputs for comment form
    const { name, value } = e.target
    setCommentFormData((prevCommentFormData) => ({
      ...prevCommentFormData,
      [name]: value,
    }))
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
        <Comments
          comments={comments}
          handleCommentFormChange={handleCommentFormChange}
          commentFormData={commentFormData}
          handleSubmitComment={handleSubmitComment}
        />
      )}
    </div>
  )
}
