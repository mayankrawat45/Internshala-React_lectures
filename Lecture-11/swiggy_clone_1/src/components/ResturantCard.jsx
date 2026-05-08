import React from 'react'

const ResturantCard = ({ restArray }) => {
  return (
    restArray.map((item) => {
      return (
        <div className='m-8' key={item.info.id}>
          <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt="La Pino'z Pizza"></img>
          <h1 className='font-bold text-lg'>{item.info.name}</h1>
          <div className='font-semibold'>
            <span>{item.info.avgRating}</span>
            <span className='mx-3'>{item.info.sla.slaString}</span>
          </div>
          <p className='truncate w-[200px]'>{item.info.cuisines.join(",")}</p>
          <p>{item.info.locality}</p>
        </div>
      )
    })
  )
}

export default ResturantCard