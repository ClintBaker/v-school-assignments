import { useState, useContext } from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { UserContext } from '../context/UserProvider'

export default function Auth() {
  const [toggle, setToggle] = useState(false)

  const { signup, signin, err, resetAuthError } = useContext(UserContext)

  function handleToggle() {
    setToggle((prevToggle) => !prevToggle)
    resetAuthError()
  }

  return (
    <>
      <div className="center">
        {toggle ? (
          <Signup err={err} signup={signup} handleToggle={handleToggle} />
        ) : (
          <Signin err={err} signin={signin} handleToggle={handleToggle} />
        )}
      </div>
    </>
  )
}
