// import React from 'react'
// import Display from './components/Display'
// import Cartoon from './components/Cartoon'



// const App = () => {
//   const cartoons = [
  //   {
    //     name: "Goku",
    //     superpower: "Super Saiyan transformations, energy blasts",
    //     magnitude: 10
    //   },
    //   {
      //     name: "Naruto Uzumaki",
      //     superpower: "Shadow clones, Rasengan, Nine-Tails power",
      //     magnitude: 9
      //   },
      //   {
        //     name: "Ben Tennyson",
        //     superpower: "Alien transformations using Omnitrix",
        //     magnitude: 9
        //   },
        //   {
          //     name: "Danny Phantom",
          //     superpower: "Invisibility, intangibility, ghost powers",
          //     magnitude: 7
          //   },
          //   {
//     name: "SpongeBob SquarePants",
//     superpower: "Regeneration, absurd durability",
//     magnitude: 6
//   },
//   {
  //     name: "Tom (Tom & Jerry)",
  //     superpower: "Cartoon physics, extreme durability",
  //     magnitude: 5
  //   },
  //   {
//     name: "Shinchan",
//     superpower: "Mischief and unpredictability",
//     magnitude: 3
//   },
//   {
  //     name: "Doraemon",
  //     superpower: "Futuristic gadgets from 22nd century",
  //     magnitude: 8
  //   }
  // ];
  //   return (
    //     <div>
    //       {/* <Display image="https://picsum.photos/200" height={300} width={400} /> */}
    //       <Cartoon data={cartoons} />
    //     </div>
    //   )
    // }
    
    // export default App
    
    

    // import Veggies from "./components/Veggies"
    // const App = () => {
      //   const vegetables = [
        //     { id: 1, name: "Potato", pickDate: "25/03/2023" },
        //     { id: 2, name: "Tomato", pickDate: "26/03/2023" },
//     { id: 3, name: "Onion", pickDate: "27/03/2023" },
//     { id: 4, name: "Carrot", pickDate: "30/03/2023" },
//     { id: 5, name: "Cabbage", pickDate: "30/03/2023" },
//     { id: 6, name: "Spinach", pickDate: "30/03/2023" }
//   ];
//   return (
  //     <div>
  //       <Veggies data={vegetables} />
  //     </div>
  //   )
  // }
  
  // export default App
  
  
import Flower from "./components/Flower"
  
  const App = () => {
    const bouquet = [
  {
    id: 1,
    flowers: ['rose', 'lily', 'marigold'],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ['snapdragon', 'sunflower',],
    totalFlowers: 10,
    price: 3400,
  },
]
    return (
      <div>
      <Flower data={bouquet}/>
    </div>
  )
}

export default App

