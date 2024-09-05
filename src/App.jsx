import { useState } from 'react'
import './App.css'
import Guess from './Guess'
import TheEnd from './TheEnd'

const words = [
  'hello',
  'my',
  'dear',
  'friend',
  'Mobina',
  'love',
  'Abolfazl'
]

function App() {
  const [isEnded, setIsEnded] = useState(false)

  return (
    <main className="container-fluid flex flex-col items-center">
      {isEnded ? <TheEnd /> : <Guess words={words} onEnd={()=>setIsEnded(true)}/>}

      <footer className='text-xs fixed left-0 w-full bottom-0 p-2 flex gap-2 items-end'>
        <span>
        Made with
        </span>
        <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m3.984 11.61 5.134 6.9c1.477 1.986 4.287 1.986 5.764 0l5.134-6.9c1.312-1.763 1.312-4.268 0-6.03-1.92-2.582-6.359-1.815-8.016.969-1.657-2.784-6.096-3.55-8.016-.97-1.312 1.763-1.312 4.268 0 6.032" fill="#EF5350" fill-opacity=".15" stroke="#EF5350" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        by
        <span className='text-[#29B6F6]'>
          Abolfazl
        </span>
      </footer>
    </main>
  )
}

export default App
