// import React from 'react'

// const Question = ({data}) => {
//   return (
//     <div>
//       {
//         data.filter((item)=>item.magnitude>5).map((item)=>{
//             return (
//                 <div style={{border:"2px solid black",backgroundColor:"lightgreen",margin:"2px"}}>
//                     <h2>{item.name}</h2>
//                     <h2>{item.superpower}</h2>
//                     <h2>{item.magnitude}</h2>
//                 </div>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Question


import React from 'react'

const Question = ({ data }) => {
    return (
        <div>
            {
                data.map((item) => item.magnitude > 5 ? <div>
                        <h2>{item.name}</h2>
                        <h2>{item.magnitude}</h2>
                        <h2>{item.superpower}</h2>
                </div> : null)
            }
        </div>
    )
}

export default Question

