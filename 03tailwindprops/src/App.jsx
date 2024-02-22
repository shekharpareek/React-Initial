import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let userProfile = {
    username : "Shekhar Pareek",
    Proffesion : "Front-End-Developer"
  }

  return (
    <>
      <h1 className="bg-green-400 p-10 border rounded-xl text-blue-500 mb-4">Tailwind test</h1>
      <div className='flex gap-6'>
      <Card username="John Doe" btnText="click me" />
      <Card username="Lesa roy"  btnText="visit me"/>
      </div>
    </>
  )
}

export default App
