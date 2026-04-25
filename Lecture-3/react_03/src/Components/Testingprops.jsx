// import React from 'react'

// function Testingprops() {
//     let a="sam"
//     let b=10
//     let c=true;
//     let d=false;
//     let e=undefined;
//     let f=null;
//   return (
//     <div>
//       <h2>a={a}</h2>
//       <h2>b={b}</h2>
//       <h2>c={c}</h2> //only the string and number will print as it is another types will not be printed
//       <h2>d={d}</h2> //only the string and number will print as it is another types will not be printed
//       <h2>e={e}</h2> //only the string and number will print as it is another types will not be printed
//       <h2>f={f}</h2> //only the string and number will print as it is another types will not be printed
//     </div>
//   )
// }

// export default Testingprops


import React from 'react'

function Testingprops() {
    let a="sam"
    let b=10
    let c=true;
    let d=false;
    let e=undefined;
    let f=null;
  return (
    <div>
      <h2>a={a}</h2>
      <h2>b={b}</h2>
      {/* we can use Stringify to make them to string to print them but undefined will still be not printed */}
      <h2>c={JSON.stringify(c)}</h2> 
      <h2>d={JSON.stringify(d)}</h2> 
      <h2>e={JSON.stringify(e)}</h2> cause JSON.stringify(undefined)=undefined not "undefined"
      <h2>f={JSON.stringify(f)}</h2> 
    </div>
  )
}

export default Testingprops
