// import React, { useState } from 'react'

// const Apicalling = () => {
//     const [todo,setTodo]=useState([])
//    async function callingapi(){
//         let res=await fetch("https://jsonplaceholder.typicode.com/todos");
//         let data=await res.json();
//         console.log(data)
//         setTodo(data)
//     }
//   return (
//     <div>
//       <button onClick={callingapi}>getData</button>
//     </div>
//   )
// }

// export default Apicalling


// const Apicalling = () => {
//   const [todo, setTodo] = useState([]);

//   async function callingapi() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await res.json();
//     setTodo(data);
//   }

//   callingapi(); // ❌ BAD when state changes re render takes place and then this will be called again and again infinitely  

//   return <div>Hello</div>;
// };


import React, { useEffect, useState } from 'react'

const Apicalling = () => {
    const [todo, setTodo] = useState([]);
    async function callingapi() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    setTodo(data);
  }
  useEffect(() => {
    callingapi();
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

export default Apicalling

