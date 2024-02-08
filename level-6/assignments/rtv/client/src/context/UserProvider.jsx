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
      // if issue log error
      console.log(e)
    }
  }

  async function signin(credentials) {
    try {
      const res = await axios.post('/api/auth/signin', credentials)
      // store user data and token in context
      const { user, token } = res.data
      getUserIssues()
      setUserState((prevUserState) => ({
        ...prevUserState,
        token,
        user,
      }))
      // store user and token in localStorage
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      console.log(e)
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

  async function getUserIssues() {
    try {
      const res = await userAxios.get('/api/api/issue/user')
      console.log(res.data.issues)
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
      value={{ ...userState, setUserState, signup, signin, logout, addIssue }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
