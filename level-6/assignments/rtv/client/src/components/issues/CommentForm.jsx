export default function CommentForm({
  handleCommentFormChange,
  commentFormData,
  handleSubmitComment,
}) {
  return (
    <div className="comment_form">
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
