// import { useState } from "react";

// export default function Counter(){
//     const [count,setCount]=useState(0);
//     return (
//         <div>
//             <button onClick={()=>setCount(count-1)} >Decrement</button>
//              <h2>Count:{count}</h2>
//             <button onClick={()=>setCount(count+1)} >Increment</button>
//         </div>
//     )
// }


// import React, { useState } from 'react'

// const Counter = () => {
//     const [count,setCount]=useState(0);
//     // here it wont work as you may want cause the setCount is asynchronous task and will have same initial count 
//     function handleInc(){
//         setCount(count+1)  //0+1=1
//         setCount(count+1)  //0+1=1
//         setCount(count+1)  //0+1=1 //last one matters and will be shown in page before it not matters
//     }
//     function handleDec(){
//         setCount(count-1) //0-1=-1
//         setCount(count-1) //0-1=-1
//         setCount(count-1) //0-1=-1
//     }
//   return (
//     <div>
//       <button onClick={handleInc} >+</button>
//       <h2>count:{count}</h2>
//       <button onClick={handleDec} >-</button>
//     </div>
//   )
// }

// export default Counter



import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    function handleINC(){
        setCount((count)=>count+1) //can access the previous value in the callback function parameters
        setCount((count)=>count+1)
        setCount((count)=>count+1) //last one matters and will show on page
    }
    function handleDEC(){
        setCount((count)=>count-1)
        setCount((count)=>count-1)
        setCount((count)=>count-1)
    }
  return (
    <div>
      <button onClick={handleINC}>+</button>
      <h2>count:{count}</h2>
      <button onClick={handleDEC}>-</button>
    </div>
  )
}

export default Counter
