import React, { useState, useEffect } from 'react'
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
    userIssues: [],
    err: '',
  }

  const [userState, setUserState] = useState(initState)

  // update user issues based on all issues
  useEffect(() => {
    setUserState((prevUserState) => ({
      ...prevUserState,
      userIssues: userState.issues.filter(
        (issue) => issue.user === userState.user._id
      ),
    }))
  }, [userState.issues])

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
      getUserIssues()
    } catch (e) {
      console.log(e.response.data.error)
    }
  }

  async function upvote(issueId) {
    // hit API with upvote for issueId
    const res = await userAxios.put(`/api/api/issue/${issueId}/upvote`)
    // error handling
    if (res.status !== 200) return alert('Unable to upvote')
    // update state
    // create new issues
    let newIssues = userState.issues
    // grab index of updated issue
    const index = userState.issues.findIndex((issue) => issue._id === issueId)
    // update issue
    newIssues[index] = res.data.issue
    // set state
    setUserState((prevUserState) => ({ ...prevUserState, issues: newIssues }))
  }

  async function downvote(issueId) {
    // hit API with downvote for issueId
    const res = await userAxios.put(`/api/api/issue/${issueId}/downvote`)
    // error handling
    if (res.status !== 200) return alert('Unable to downvote')
    // UPDATE STATE:
    // create new issues var
    let newIssues = userState.issues
    // grab index of updated issue
    const index = userState.issues.findIndex((issue) => issue._id === issueId)
    // update issue
    newIssues[index] = res.data.issue
    // set state
    setUserState((prevUserState) => ({ ...prevUserState, issues: newIssues }))
  }

  async function getAllIssues() {
    try {
      // get user issues
      const res = await userAxios.get('/api/api/issue')
      // sort issues based on upvotes
      const sortedIssues = res.data.issues.sort(
        (a, b) => b.totalVotes - a.totalVotes
      )
      // update state
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: sortedIssues,
      }))
    } catch (e) {
      console.log(e.response.data.error)
    }
  }

  async function getUserIssues() {
    getAllIssues()
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
        getAllIssues,
        upvote,
        downvote,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
