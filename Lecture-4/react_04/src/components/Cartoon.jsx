import React from 'react'

const Cartoon = ({data}) => {
  return (
    <div>
      {
        data.map((item)=>{
            if(item.magnitude>5){
                return (
                    <div>
                        <h3>{item.name}</h3>
                        <h3>{item.superpower}</h3>
                        <h3>{item.magnitude}</h3>
                    </div>
                )
            }
        })
      }
    </div>
  )
}

export default Cartoon
