// import React, { useEffect, useState } from 'react'

// const Timer = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let id = setInterval(() => {
//       setCount(count + 1)
//     }, 1000);
//   }, [count])
//   return (
//     <div>
//       <h2>count:{count}</h2>
//     </div>
//   )
// }

// export default Timer


// import React, { useEffect, useState } from 'react'

// const Timer = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let id = setInterval(() => {
//       setCount(count + 1)
//     }, 1000);
//     return ()=>clearInterval(id); //clean up function to remove the previous intervals 
//   }, [count])
//   return (
//     <div>
//       <h2>count:{count}</h2>
//     </div>
//   )
// }

// export default Timer

import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setCount(count=>count + 1)
    }, 1000);
  }, [])
  return (
    <div>
      <h2>count:{count}</h2>
    </div>
  )
}

export default Timer