import { useEffect, useState, useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'
import { UserContext } from './context/UserProvider'
import './nav.css'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  // get token from context
  const { token, user, logout, addIssue, issues, getUserIssues } =
    useContext(UserContext)

  const handleLogout = () => {
    // logout function to clear localStorage and state
    logout()
  }

  return (
    <>
      <nav className="nav">
        <div className="nav_secondary">
          <h1>RTV</h1>
          {token && <a>All Issues</a>}
        </div>
        <div>
          {token && (
            <a onClick={handleLogout} className="logout">
              Logout
            </a>
          )}
        </div>
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
              <ProtectedRoute token={token} redirect="/">
                <Profile
                  getUserIssues={getUserIssues}
                  issues={issues}
                  addIssue={addIssue}
                  user={user}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </section>
    </>
  )
}

export default App
