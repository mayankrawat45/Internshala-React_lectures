
// named Export 
// export function Sam(){
//   return <h1>Hi Sam</h1>
// }



// export function Vohra(){
//   return <h1>Hi Vohra</h1>
// }

// function App(){
//   return <h2>this is App</h2>
// }
// // default export can be only one form the Component
// export default App;

// -------------------------->


// named Export 
//  function Sam(){
//   return <h1>Hi Sam</h1>
// }

//  function Vohra(){
//   return <h1>Hi Vohra</h1>
// }
// can be exported in the form of object 
// export {Sam,Vohra} 

// function App(){
//   return <h2>this is App</h2>
// }
// default export can be only one form the Component
// export default App;

// ------------------------------------->

// import { Dog,Pitbull } from "./Components/Animal";
// import Retriver from "./Components/Animal"
// import Cat from "./Components/cat"
// import Pig from "./Components/Pig";

// function App(){
//   return (
//     <div>
//       <Dog/>
//       <Retriver/>
//       <Pitbull/>
//       <Cat/>
//       <Pig/>  
//     </div>
//   )
// }

// export default App;


// import Person from "./Components/Person";

// function App(){
//   return (
//     <div>
//       <Person name="Mayank" age={23} course="MCA" />
//       <Person name="Rahul" age={22} course="MCA" />
//       <Person name="Harsh" age={22} course="Bca" />
//     </div>
//   )
// }

// export default App;


import Testingprops from "./Components/Testingprops";

export default function App(){
  return (
    <div>
      <Testingprops />
    </div>
  )
}

