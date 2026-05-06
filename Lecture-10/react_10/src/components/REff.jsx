import React, { useRef, useState } from 'react'

const REff = () => {
  const [count,setCount]=useState(0);
  const counterRef=useRef(0);

  function handleRef(){
    counterRef.current++;
  }
  return (
    <div>
      <button onClick={handleRef}>{counterRef.current}</button>
      <button onClick={()=>setCount(count+1)}>+{count}</button>
    </div>
  )
};
export default REff
