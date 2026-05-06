import React, { useState } from 'react'

const Input = () => {
    const [inp,setInp]=useState("");
    function handleChange(e){
        setInp(e.target.value);
        console.log(inp)
    }
  return (
    <div>
      <input type="text" value={inp} onChange={handleChange}  placeholder='enter here' />
    </div>
  )
}

export default Input
