import { useState } from 'react'
function App() {
 let [color,setColor] = useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed left-1/2 right-1/2 bottom-10 p-6 mt-5 flex justify-center rounded-lg w-auto'>
        <div className='px-4 py-4  flex items-center justify-around rounded-full gap-3 shadow-xl bg-transparent bg-slate-200'>
          <button onClick={()=>setColor("#f36f6f")} className='bg-red-400 px-6 py-2 rounded-full  text-slate-950 shadow-xl'>Red</button>
          <button onClick={()=>setColor("#facc15")}className='bg-yellow-400 px-6 py-2 rounded-full text-black shadow-lg'>Yellow</button>
          <button onClick={()=>setColor("#4ade80")}  className='bg-green-400 px-6 py-2 rounded-full text-black shadow-lg'>Green</button>
          <button onClick={()=>setColor("#60a5fa")} className='bg-blue-400 px-6 py-2 rounded-full text-black shadow-lg'>Blue</button>
          <button onClick={()=>setColor("#f472b6")} className='bg-pink-400 px-6 py-2 rounded-full text-black shadow-lg'>Pink</button>
          <button onClick={()=>setColor("#c084fc")} className='bg-purple-400 px-6 py-2 rounded-full text-black shadow-lg'>Purple</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
