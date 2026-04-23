// create a component=fn

import Cat from "./components/Cat";
import Dog from "./components/Dog";

// Not a component just a function
// function App(){
//   return 10
// }


// Not a component just a function
// function App(){
//   return "Mayank"
// }



// Component, not just a function 
// that returns jsx

function App(){
  return (
    <div>
      <h1>Hello Mayank this side</h1>
      <Dog/>
      <Cat/>
    </div>
  )
}

export default App;