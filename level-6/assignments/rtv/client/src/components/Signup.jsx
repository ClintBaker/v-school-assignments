import { useState } from 'react'
const initFormData = { username: '', password: '' }

export default function Signup({ handleToggle, signup, err }) {
  const [formData, setFormData] = useState(initFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(formData)
  }
  return (
    <>
      <div className="card">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            type="password"
          />
          <button>Submit</button>
          <p style={{ color: 'red' }}>{err}</p>
        </form>
        <a className="cursor" onClick={handleToggle}>
          Already have an account?
        </a>
      </div>
    </>
  )
}
