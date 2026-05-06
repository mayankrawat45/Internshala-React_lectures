// import React, { useEffect, useState } from 'react'

// const Ref = () => {
//     const [first, setfirst] = useState(0);
//     let salary=20000;
//     console.log("hello")
//     useEffect(()=>{
//         setTimeout(()=>{
//             document.getElementById("salary").innerHTML="50000"
//         },3000)
//     },[])
//   return (
//     <div>
//       <h1>Salary is <span id="salary">{salary}</span></h1>
//     </div>
//   )
// }

// export default Ref


import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const spanEl=useRef(20000); 
    // console.log(spanEl.current);
    useEffect(()=>{
        setTimeout(()=>{
            // console.log(spanEl.current)
            spanEl.current.innerHTML="50000"
        },3000)
    },[])
  return (
    <div>
      <h1>Salary is <span ref={spanEl}>{spanEl.current}</span></h1>
    </div>
  )
}

export default Ref