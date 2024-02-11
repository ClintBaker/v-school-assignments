import Comment from './Comment'
import CommentForm from './CommentForm'

export default function Comments({
  handleCommentFormChange,
  commentFormData,
  handleSubmitComment,
}) {
  return (
    <div className="comments">
      <h4>Comments ⬇️</h4>
      <Comment />
      <CommentForm
        handleCommentFormChange={handleCommentFormChange}
        commentFormData={commentFormData}
        handleSubmitComment={handleSubmitComment}
      />
    </div>
  )
}
