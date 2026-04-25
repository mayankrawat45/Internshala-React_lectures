import React from 'react'

const Flower = ({data}) => {
  return (
    <div>
      {
        data.map((item)=>{
            return (
                <div>
                    <h2>{item.flowers.join(", ")}</h2>
                    <h2>{item.flowers.includes("rose")?`Price of bouquet with roses:${item.price}`:`Price:${item.price}`}</h2>
                </div>
            )
        })
      }
    </div>
  )
}

export default Flower
