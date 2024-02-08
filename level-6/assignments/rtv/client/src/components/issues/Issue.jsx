export default function Issue({ title, description, _id }) {
  return (
    <div className="issue card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
