import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import { UserContext } from '../context/UserProvider'

export default function Auth() {
  const [toggle, setToggle] = useState(false)

  const { signup, signin } = useContext(UserContext)

  function handleToggle() {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <>
      <div className="center">
        {toggle ? (
          <Signup signup={signup} handleToggle={handleToggle} />
        ) : (
          <Signin signin={signin} handleToggle={handleToggle} />
        )}
      </div>
    </>
  )
}
