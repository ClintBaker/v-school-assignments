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
  // toggle state
  const [commentToggle, setCommentToggle] = useState(false)
  // form data state
  const [commentFormData, setCommentFormData] = useState({ comment: '' })
  // upvote state
  const [vote, setVote] = useState('')
  // grab addComment, user, upvote, downvote from context
  const { addComment, user, downvote, upvote } = useContext(UserContext)

  // define class of upvote / downvote
  useEffect(() => {
    if (upvotes.includes(user._id)) setVote('upvote')
    if (downvotes.includes(user._id)) setVote('downvote')
    console.log(issue)
  }, [upvotes, downvotes])

  function handleSubmitComment() {
    const comment = commentFormData.comment
    // async call to axios to post comment
    setCommentFormData({ comment: '' })
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

  function handleUpvote() {
    // if already upvoted do nothing
    // if (upvotes.includes(user._id)) return alert('already upvoted')
    // else fire upvote function
    upvote(_id)
  }

  function handleDownvote() {
    // if already downvoted do nothing
    if (downvotes.includes(user._id)) return alert('already downvoted')
    // else fire downvote function
    downvote(_id)
  }

  function toggleComment() {
    setCommentToggle((prevCommentToggle) => !prevCommentToggle)
  }
  return (
    <div className="issue card">
      <h3 className="issue_title">{title}</h3>
      <h5 className="blue">User: {issue.user.username}</h5>
      <p className="issue_description">{description}</p>
      <div className="issue_buttons">
        <div className="issue_arrows">
          <span>{totalVotes} </span>
          <button
            onClick={handleUpvote}
            className={vote === 'upvote' ? `blue issue_btn` : 'issue_btn'}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button
            onClick={handleDownvote}
            className={vote === 'downvote' ? `blue issue_btn` : 'issue_btn'}
          >
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
