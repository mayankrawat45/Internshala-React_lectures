// import React, { memo, useState } from 'react'

// const USecallback = () => {
//     const [count,setCount]=useState(0);
//     // let a=100;
//     let a=function (){console.log("hi")}
//   return (
//     <div>
//       <Chotu data={a} />
//       <button onClick={()=>setCount(count+1)}>click:{count}</button>
//     </div>
//   )
// }

// export default USecallback


// const Chotu=memo(function ({data}){
//     return (
//         <div>
//             {/* <h2>Hello-{data}</h2> */}
//             <h2>Hello-{data()}</h2> //will be called many times even though the prop that i have send is same
//         </div>
//     )
// })



import React, { memo, useCallback, useState } from 'react'

const USecallback = () => {
    const [count,setCount]=useState(0); 
    let a=useCallback(function (){console.log("hi")},[])
  return (
    <div>
      <Chotu data={a} />
      <button onClick={()=>setCount(count+1)}>click:{count}</button>
    </div>
  )
}

export default USecallback


const Chotu=memo(function ({data}){
    return (
        <div>
            {/* <h2>Hello-{data}</h2> */}
            <h2>Hello-{data()}</h2> //will be not rerendered again and again cause the function is getting memoized
        </div>
    )
})
