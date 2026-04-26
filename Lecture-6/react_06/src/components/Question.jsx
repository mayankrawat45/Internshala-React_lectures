// import React, { useState } from 'react'

// const Question = () => {
//      const [count,setCount]=useState(0);
//         function handleclick(){
//             setCount((count)=>count+1) //prev 0+1=1
//             setCount(count+1) //intial 0+1=1
//             setCount((count)=>count+1) //prev 1+1=2
//         }
//   return (
//     <div>
//       <button onClick={handleclick} >+</button>
//       <h2>{count}</h2>
//     </div>
//   )
// }

// export default Question


// import React, { useState } from 'react'

// const Question = () => {
//      const [count,setCount]=useState(0);
//         function handleclick(){
//           setCount(count+1) //intial 0+1=1
//             setCount((count)=>count+1) //prev 1+1=2
//             setCount((count)=>count+1) //prev 1+1=3
//         }
//   return (
//     <div>
//       <button onClick={handleclick} >+</button>
//       <h2>{count}</h2>
//     </div>
//   )
// }

// export default Question


import React, { useState } from 'react'

const Question = () => {
     const [count,setCount]=useState(0);
        function handleclick(){
          setCount((count)=>count+1) //prev 0+1=1
          setCount((count)=>count+2) //prev 1+2=3
          setCount(count+1) //intial 0+1=1
        }
  return (
    <div>
      <button onClick={handleclick} >+</button>
      <h2>{count}</h2>
    </div>
  )
}

export default Question


// import React, { useState } from 'react'

// const Question = () => {
//      const [count,setCount]=useState(0);
//         function handleclick(){
//           setCount((count)=>count+1) //prev 0+1=1
//           setCount(count+1) //intial 0+1=1
//           setCount((count)=>count+2) //prev 1+2=3
//         }
//   return (
//     <div>
//       <button onClick={handleclick} >+</button>
//       <h2>{count}</h2>
//     </div>
//   )
// }

// export default Question