import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { NewsBoard } from './components/NewsBoard'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <>
      <NewsBoard/>
    </>
  )
}

export default App
