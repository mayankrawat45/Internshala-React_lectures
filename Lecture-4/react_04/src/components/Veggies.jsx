import React, { useState } from 'react'

const Veggies = ({data}) => {
  const [fresh,setFresh]=useState(false);
  return (
    <div>
      {
        data.map((item)=>{
            return (
                <div>
                    <h2 style={{color:fresh && item.pickDate==="30/03/2023"?"green":"black"}}>{item.name}</h2>
                    <h2>{item.pickDate}</h2>
                </div>
            )
        })
      }

      <button onClick={()=>setFresh(true)}>Fresh Vegetables</button>
    </div>
  )
}

export default Veggies
