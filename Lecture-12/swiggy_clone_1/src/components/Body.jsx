import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard'
import ApiCalling from './ApiCalling'
import Search from './Search';

const Body = () => {
 let restArray= ApiCalling();
 const [allResturantArr,setAllResturantArr]=useState(restArray);
 useEffect(()=>{
  if(restArray && restArray.length){
    setAllResturantArr(restArray)
  }
 },[restArray])
 function filterTopRes(restArray){
    setAllResturantArr(restArray.filter((item)=>item.info.avgRating>=4.3))
 }
 function resetFilter(restArray){
    setAllResturantArr(restArray);
 }
  return (
    <div>
        <h1 className='font-bold text-xl m-8'>Restaurants with online food delivery in Lucknow</h1>
        <button onClick={()=>filterTopRes(restArray)} className='border rounded w-1/12 m-2 ml-10 cursor-pointer hover:bg-gray-200'>Rating 4.3+</button>
        <button onClick={()=>resetFilter(restArray  )} className='border rounded w-1/12 ml-10 cursor-pointer hover:bg-gray-200'>Reset</button>
        <div className='mx-10 border'>
          <Search restArray={restArray} setAllResturantArr={setAllResturantArr} />
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <ResturantCard restArray={allResturantArr} />
        </div>
    </div>
  )
}

export default Body