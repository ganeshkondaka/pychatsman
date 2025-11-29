import './App.css'
import { Home } from './pages/Home'
import { Store } from './hooks/useStore'
function App() {
  const { theme } = Store()
  return (
    <div className={`flex ${theme === "dark" ? `bg-zinc-900 text-white` : `bg-white text-black`} w-screen h-screen overflow-y-scroll`}>
      <div className='w-full h-full mx-32 py-5 flex flex-col'>
        <Home />
      </div>
    </div>
  )
}

export default App
