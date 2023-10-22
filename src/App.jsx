
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  
 const [count,setCount]=useState(0)

//[count3,setzer]=useState(0)
const inc=()=>{
setCount(count+1)

  }
  const dec=()=>{
    setCount(count-1)
      }

    const zeroo=()=>{
        setCount(0)
         }

  return (
    <>
    <div style={{height:"100vh",width:"100vw"}}  className='d-flex flex-column  align-content-center  justify-content-center '>
    <p className='text-center  font-weight-bolder m-5' style={{color:"orangered"}}>Challenge</p>
    <div className='d-flex align-content-center  justify-content-center'>
    <button onClick={inc}>Increase</button>
    <button onClick={dec}>Decrease</button>
    <button onClick={zeroo}>Set to Zero</button>
<span>{count}</span>
    </div>

    </div>
       


    
    </>


      )
}

export default App
