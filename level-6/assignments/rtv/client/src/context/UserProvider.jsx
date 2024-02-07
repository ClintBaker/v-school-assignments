import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props) {
  const initState = { user: {}, token: '', issues: [] }

  const [userState, setUserState] = useState(initState)

  function signUp(credentials) {
    axios.get('/api')
  }
  return (
    <UserContext.Provider value={{ ...userState, setUserState }}>
      {props.children}
    </UserContext.Provider>
  )
}
