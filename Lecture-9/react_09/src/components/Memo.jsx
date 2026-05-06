// import React, { useState } from 'react'

// const Memo = ({username}) => {
//     const [naam,setNaam]=useState(username)
//     function handleclick(){
//         setNaam(Math.floor(Math.random()*10));
//     }
//   return (
//     <div>
//       <Chotu user={naam}/>
//       <button onClick={handleclick}>click</button>
//       <Chotu user="mayank"/>
//       <Chotu user="rawat"/>
//     </div>
//   )
// }

// export default Memo

// function Chotu({user}){
//     return (
//         <div>
//             <h1>Chotu:{user}</h1>
//         </div>
//     )
// }



// using memo function
import React, { memo, useState } from 'react'

const Memo = ({username}) => {
    const [naam,setNaam]=useState(username)
    function handleclick(){
        setNaam(Math.floor(Math.random()*10));
    }
  return (
    <div>
      <Chotu user={naam}/>
      <button onClick={handleclick}>click</button>
      <Chotu user="mayank"/>
      <Chotu user="rawat"/>
    </div>
  )
}

export default Memo

const Chotu=memo(function ({user}){
    return (
        <div>
            <h1>Chotu:{user}</h1>
        </div>
    )
})

