import { useEffect, useState, useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'
import { UserContext } from './context/UserProvider'
import './nav.css'

function App() {
  const [count, setCount] = useState(0)

  // get token from context
  const { token, user, logout, addIssue, issues } = useContext(UserContext)

  const handleLogout = () => {
    // logout function to clear localStorage and state
    logout()
  }

  return (
    <>
      <nav className="nav">
        <h1>RTV</h1>
        {token && (
          <a onClick={handleLogout} className="logout">
            Logout
          </a>
        )}
      </nav>
      <section className="container">
        <Routes>
          {/* main page.  if authenticated push to profile, otherwise go to Auth */}
          <Route
            path="/"
            element={token ? <Navigate to="/profile" /> : <Auth />}
          />
          {/* profile */}
          <Route
            path="/profile"
            element={
              token ? (
                <Profile issues={issues} addIssue={addIssue} user={user} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </section>
    </>
  )
}

export default App
