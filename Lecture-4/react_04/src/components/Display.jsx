import React from 'react'

const Display = ({image,height,width}) => {
  return (
    <div>
      <img height={height} width={width} src={image} alt="" />
    </div>
  )
}

export default Display
