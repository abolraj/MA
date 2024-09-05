import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guess from './Guess'

const words = [
  'hello',
  'car',
  'mobina',
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <main class="container-fluid flex flex-col items-center">
      <Guess words={words}/>
    </main>
  )
}

export default App
