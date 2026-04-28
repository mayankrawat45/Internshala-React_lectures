import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        if(count==0){
            console.log("component is mounted")
        }else if(count>0 && count <6){
            console.log("component is updated")
        }else if(count==6){
            return ()=>console.log("component is unmounted but will be between 2 re renders")
        }
    },[count])
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>inc</button>
    </div>
  )
}

export default Counter
