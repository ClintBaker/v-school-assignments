import Comment from './Comment'
import CommentForm from './CommentForm'

export default function Comments({
  handleCommentFormChange,
  commentFormData,
  handleSubmitComment,
  comments,
}) {
  return (
    <div className="comments">
      <h4>Comments ⬇️</h4>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      <CommentForm
        handleCommentFormChange={handleCommentFormChange}
        commentFormData={commentFormData}
        handleSubmitComment={handleSubmitComment}
      />
    </div>
  )
}
