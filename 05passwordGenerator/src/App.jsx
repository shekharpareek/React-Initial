import React, { useState,useCallback,useEffect,useRef } from 'react';
function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("");
    // useRef hook
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() =>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str +="0123456789";
    }
    if(charAllowed){
      str += "@%$*&!><{}|/~:;";
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length+1);
      
      pass += str.charAt(char);
     
    }
    setPassword(pass);
    
  },[length,numberAllowed,charAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    PasswordGenerator()
   },[length,numberAllowed,charAllowed,PasswordGenerator]);

  return (
    <>
      <h1 className='text-white text-center text-4xl mt-5 my-3'>PasswordGenerator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 bg-gray-700 text-orange-400'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input  type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-lg font-medium'
            placeholder='Password'
            ref={passwordRef}
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 w-1/2'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}  />
            <label>Length: {length}</label>
          </div >
          <div className='flex items-center gap-x-1'>
            <input className='rounded-md' type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input className='rounded-md' type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

