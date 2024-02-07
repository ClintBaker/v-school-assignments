import { useState } from 'react'
const initFormData = { username: '', password: '' }

export default function Signin({ handleToggle, signin }) {
  const [formData, setFormData] = useState(initFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signin(formData)
  }

  return (
    <div className="card">
      <h2>Sign in</h2>
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
      </form>
      <a className="cursor" onClick={handleToggle}>
        Need to create an account?
      </a>
    </div>
  )
}
