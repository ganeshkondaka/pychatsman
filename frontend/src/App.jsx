import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex bg-zinc-900 text-white w-screen h-screen overflow-y-scroll'>
      <div className='w-full h-full mx-32 py-5 flex flex-col'>
        <Home />
      </div>
    </div>
  )
}

export default App
