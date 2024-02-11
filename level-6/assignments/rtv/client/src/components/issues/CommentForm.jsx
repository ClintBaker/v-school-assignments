export default function CommentForm({
  handleCommentFormChange,
  commentFormData,
  handleSubmitComment,
}) {
  return (
    <div className="comment_form">
      <h4>Comments ⬇️</h4>
      <p>Add a comment:</p>
      <textarea
        placeholder="comment"
        name="comment"
        value={commentFormData.comment}
        onChange={handleCommentFormChange}
      />
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  )
}
