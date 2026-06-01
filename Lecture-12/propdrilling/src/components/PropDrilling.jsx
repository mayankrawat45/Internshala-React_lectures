// import React from 'react'
// import { useState } from 'react'

// const PropDrilling = () => {
//   let [count,setCount]=useState(0);
//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

// function Count({count,setCount}){
//       return (
//         <div>
//           <h2>count:{count}</h2>
//           <Buttons count={count} setCount={setCount}/>
//         </div>
//       )
// }

// function Buttons({count,setCount}){
//       return(
//         <div>
//           <button onClick={()=>setCount(count+1)}>Inc</button>
//           <button onClick={()=>setCount(count-1)}>Dec</button>
//         </div>
//       )
// }

// export default PropDrilling



// now using the contextApi

import React from 'react'
import { useState } from 'react'
import CounterContext from '../ContextApi/Context';
import { useContext } from 'react';

const PropDrilling = () => {
  let [count,setCount]=useState(0);
  return (
    <div>
      <CounterContext.Provider value={{count,setCount}}>
          <Count />
      </CounterContext.Provider>
    </div>
  )
}

function Count(){
    const {count}=useContext(CounterContext);
      return (
        <div>
          <h2>count:{count}</h2>
          <Buttons/>
        </div>
      )
}

function Buttons(){
    const {count, setCount}=useContext(CounterContext)
      return(
        <div>
          <button onClick={()=>setCount(count+1)}>Inc</button>
          <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
      )
}

export default PropDrilling