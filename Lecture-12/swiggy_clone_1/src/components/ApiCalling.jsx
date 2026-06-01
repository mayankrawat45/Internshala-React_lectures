import React, { useEffect, useState } from 'react'
import axios from "axios"

const ApiCalling = () => {
    const [allResturantArr,setAllResturantArr]=useState([]);
    useEffect(()=>{
        let Api="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.892166877253285&lng=80.95964301377535&carousel=true&third_party_vendor=1"
        async function calling(){
           try {
             let res=await axios.get(Api)
            console.log(res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setAllResturantArr(res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
           } catch (error) {
            console.log(error)
           }
        }
        calling();
    },[])
  return allResturantArr
}

export default ApiCalling