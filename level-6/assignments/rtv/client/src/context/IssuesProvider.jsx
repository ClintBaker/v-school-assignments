import React, { useState } from 'react'
import axios from 'axios'

export const IssuesContext = React.createContext()

// create axios instance
const userAxios = axios.create()
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function IssuesProvider(props) {
  const initState = {
    issues: [],
  }

  const [issuesState, setIssuesState] = useState(initState)

  async function getAllIssues() {
    try {
      // get user issues
      const res = await userAxios.get('/api/api/issue')
      // sort issues based on upvotes
      const sortedIssues = res.data.issues.sort(
        (a, b) => b.totalVotes - a.totalVotes
      )
      // update state
      setIssuesState((prevIssuesState) => ({
        ...prevIssuesState,
        issues: sortedIssues,
      }))
    } catch (e) {
      console.log(e.response.data.error)
    }
  }

  return (
    <IssuesContext.Provider value={{ ...issuesState, getAllIssues }}>
      {props.children}
    </IssuesContext.Provider>
  )
}
