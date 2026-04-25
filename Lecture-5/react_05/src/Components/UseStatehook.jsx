// import React from 'react'

// const UseStatehook = () => {
//     let name="Mayank"
//     function handleClick() {
//       name="Anonymouse"
//       console.log(name)
//     }
    
//   return (
//     <div>
//     {/* the re-rendering won't take place so the value won't be seen */}
//       <h1>{name}</h1> 
//       <button onClick={handleClick}>Logout</button>
//     </div>
//   )
// }

// export default UseStatehook



import React, { useState } from 'react'

const UseStatehook = () => {
    const [user,setUser]=useState("Mayank");
  return (
    <div>
      <h2>{user}</h2>
      <button onClick={()=>{setUser("Anonymous")}}>Logout   </button>
    </div>
  )
}

export default UseStatehook
