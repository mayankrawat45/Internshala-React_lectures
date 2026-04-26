import React, { useEffect, useState } from 'react'
import axios from "axios"

const FetchingApi = () => {
  const [todo,setTodo]=useState([]);
  function Fetchbythen(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setTodo(data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  async function FetchbyAsync(){
    try {
      let res=await fetch("https://jsonplaceholder.typicode.com/todos");
    let data=await res.json();
    console.log(data);
    setTodo(data)
    } catch (error) {
      console.log(error)
    }
  }

  function Axiosbythen(){
    axios("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      console.log(res.data)
      setTodo(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  async function Axiosbyasync() {
    try {
      let res=await axios("https://jsonplaceholder.typicode.com/todos")
    console.log(res.data);
    setTodo(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    // Fetchbythen();
    // FetchbyAsync();
    // Axiosbythen();
    Axiosbyasync();
  }, [])
  

  return (
    <div>
      <h1>nd</h1>
    </div>
  )
}

export default FetchingApi
