import { useState } from 'react'

const initFormData = {
  title: '',
  description: '',
}

export default function CreateIssue({ addIssue }) {
  const [formData, setFormData] = useState(initFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addIssue(formData)
    setFormData(initFormData)
  }
  return (
    <div className="card">
      <h3>Create Issue</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
