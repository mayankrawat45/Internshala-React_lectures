// import React, { useState } from 'react'

// const Input_button = () => {
//     const [count,setCount]=useState(0);
//     const [num,setNum]=useState(0);
//     function handleChange(e){
//         let length=e.target.value;
//         let sum=0;
//         for(let i=1;i<=length;i++){
//             sum+=i;
//         }
//         setNum(sum);

//     }
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>increment</button>
//       <h2>Count:{count}</h2>
//       <input value={num} type="number" onChange={handleChange} />
//       <h2>Sum:{num}</h2>
//     </div>
//   )
// }

// export default Input_button

// import React, { useState } from 'react'

// const Input_button = () => {
//     const [count,setCount]=useState(0);
//     const [num,setNum]=useState(0);
    
//         let sum=0;
//         for(let i=1;i<=num;i++){
//             sum+=i;
//             console.log("loop ran")
//         }
        

    
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>increment</button>
//       <h2>Count:{count}</h2>
//       <input value={num} type="number" onChange={(e)=>setNum(e.target.value)} />
//       <h2>Sum:{sum}</h2>
//     </div>
//   )
// }

// export default Input_button



import React, { useMemo, useState } from 'react'

const Input_button = () => {
    const [count,setCount]=useState(0);
    const [num,setNum]=useState(0);

    const MemoCount=useMemo(()=>{
        let sum=0;
        for(let i=1;i<=num;i++){
            console.log("loop ran")
            sum+=i;
        }
        return sum;
    },[num])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <h2>Count:{count}</h2>
      <input value={num} type="number" onChange={(e)=>setNum(e.target.value)} />
      <h2>Sum:{MemoCount}</h2>
    </div>
  )
}

export default Input_button
