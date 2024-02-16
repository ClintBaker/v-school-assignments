import { useEffect, useState, useContext } from 'react'
import { Route, Routes, Navigate, Link } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'
import { UserContext } from './context/UserProvider'
import './nav.css'
import ProtectedRoute from './components/ProtectedRoute'
import AllIssues from './components/AllIssues'

function App() {
  const [count, setCount] = useState(0)

  // get token from context
  const {
    token,
    user,
    logout,
    addIssue,
    issues,
    userIssues,
    getUserIssues,
    getAllIssues,
  } = useContext(UserContext)

  const handleLogout = () => {
    // logout function to clear localStorage and state
    logout()
  }

  return (
    <>
      <nav className="nav">
        <div className="nav_secondary">
          <h1>RTV</h1>
          {token && <Link to="/profile">Profile</Link>}
          {token && <Link to="/issues">All Issues</Link>}
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
                  issues={userIssues}
                  addIssue={addIssue}
                  user={user}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/issues"
            element={
              <ProtectedRoute token={token} redirect="/">
                <AllIssues
                  getUserIssues={getAllIssues}
                  issues={issues}
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
