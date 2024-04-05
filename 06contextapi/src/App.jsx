import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-orange-500 text-3xl p-4 text-center text-white'>Currency Convertor</h1>
    </div>
  )
}

export default App
