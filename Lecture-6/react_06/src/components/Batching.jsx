import React, { useState } from 'react'

const Batching = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("maay")
    function handleclick(){
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setName("lollipop");
    }
  return (
    <div>
      <button onClick={handleclick} >+</button>
      <h2>{count}</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default Batching
