import React from 'react'

const Search = ({restArray,setAllResturantArr}) => {
    function searchRest(searchedText){
        setAllResturantArr(restArray.filter((rest)=>rest.info.name.toLowerCase().trimEnd().includes(searchedText.toLowerCase())))
    }
  return (
    <div>
        <input type="text" onChange={(e)=>searchRest(e.target.value)} />
    </div>
  )
}

export default Search