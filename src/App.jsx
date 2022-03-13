import React, {useState, useEffect} from 'react'

function App() {


  const [size, setSize] = useState(window.innerWidth)
    
  const updateSize = () =>{
    window.addEventListener('resize',()=>{ //document.addEventListner use kar rahe the, isi liye kam nahi kiya
      setSize(window.innerWidth)
    })
  }

useEffect(() => {
    updateSize();
    return () => {
      window.removeEventListener('resize'); //This is how we use Clean up function
    }
  },[])
  
  return (
    <>
      <div className="main-container bg-gray-700 h-screen flex items-center justify-center">
        <div className="text-container bg-slate-100 rounded-lg h-72 flex flex-col items-center w-72 justify-center shadow-2xl">
          <p className='text-purple-600 font-extralight text-xl'>Screen Size Is</p>
          <p className="text-purple-600 text-2xl font-extrabold">{size}px</p>
        </div>
      </div>
    </>
  )
}

export default App