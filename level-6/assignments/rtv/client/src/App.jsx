import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getStuff = async () => {
      const res = await axios.get('/api')
      console.log(res)
    }
    getStuff()
  }, [])

  return (
    <>
      <nav>
        <h1>ROCK THE VOTE</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
