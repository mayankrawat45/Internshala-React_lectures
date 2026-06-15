import React from 'react'
import { useEffect } from 'react';
import {useParams} from "react-router-dom"
import axios from "axios"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const ResturantDetails = () => {
    let {idd}=useParams();
    const [foodDetailsItems,setFoodDetailsItems]=useState([])
    useEffect(()=>{
        async function apiCalling(){
            const Api=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.892166877253285&lng=80.95964301377535&restaurantId=${idd}&submitAction=ENTER`
            let res=await axios.get(Api)
            console.log(res.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
            setFoodDetailsItems(res.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        }       
        apiCalling() 
    },[idd])

    const dispatch=useDispatch()
    function handleItem(foodItem){
        dispatch(addItem(foodItem));
    }
  return (
    <div className=''>
        <h1 className='text-center font-bold text-2xl'>List of item's available at resturant</h1>
        {
            foodDetailsItems.map(foodItem=>{
                return(
                    <div className='flex w-3/4 mx-auto mb-10 border-b-4 p-4'>
                        <div className='flex flex-col w-3/4'>
                            <h1>{foodItem.card.info.name}</h1>
                            <h1>&#8377; {foodItem?.card?.info?.price / 100}</h1>
                            <h1>{foodItem.card.info.category}</h1>
                        </div>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`} alt="" />
                        <button className='border bg-green-300 h-8 relative top-16 right-5' onClick={()=>handleItem(foodItem)}>Add</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ResturantDetails