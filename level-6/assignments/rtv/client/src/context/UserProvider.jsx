import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

// create axios instance
const userAxios = axios.create()
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    issues: [],
    err: '',
  }

  const [userState, setUserState] = useState(initState)

  async function signup(credentials) {
    try {
      // sign up via api
      const res = await axios.post('/api/auth/signup', credentials)
      // store user data and token in context
      const { user, token } = res.data
      setUserState((prevUserState) => ({
        ...prevUserState,
        token,
        user,
      }))
      // store user and token in localStorage
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      // if issue handle error
      handleAuthError(e.response.data.error)
    }
  }

  async function signin(credentials) {
    try {
      const res = await axios.post('/api/auth/signin', credentials)
      // store user data and token in context
      const { user, token } = res.data
      // get user issues and store in state
      // getUserIssues()
      setUserState((prevUserState) => ({
        ...prevUserState,
        token,
        user,
      }))
      // store user and token in localStorage
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      // if issue handle error
      handleAuthError(e.response.data.error)
    }
  }

  async function logout() {
    // reset user state
    setUserState({
      user: {},
      token: '',
      issues: [],
    })
    // reset localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  function handleAuthError(err) {
    setUserState((prevState) => ({
      ...prevState,
      err,
    }))
  }

  function resetAuthError() {
    setUserState((prevUserState) => ({
      ...prevUserState,
      err: '',
    }))
  }

  async function addIssue(newIssue) {
    try {
      const res = await userAxios.post('/api/api/issue', newIssue)
      // add issue to state
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: [...prevUserState.issues, res.data.issue],
      }))
    } catch (e) {
      console.log(e.response.data.error)
    }
  }

  async function addComment(issueId, comment) {
    try {
      const newComment = await userAxios.post(
        `/api/api/issue/${issueId}/comment`,
        {
          text: comment,
        }
      )

      console.log(newComment)

      // if success we need to reload the page
    } catch (e) {
      console.log(e.response.data.error)
    }
  }

  async function getUserIssues() {
    try {
      const res = await userAxios.get('/api/api/issue/user')
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: res.data.issues,
      }))
    } catch (e) {
      console.log(e.response.data.error)
    }
  }
  return (
    <UserContext.Provider
      value={{
        ...userState,
        setUserState,
        signup,
        signin,
        logout,
        addIssue,
        addComment,
        resetAuthError,
        getUserIssues,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
