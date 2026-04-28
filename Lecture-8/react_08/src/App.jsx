// import React from "react";

// export default class App extends React.Component{
//   componentDidMount(){
//     console.log("component created")
//   }
//   render(){
//     return (
//       <div>
//         <h2>hey</h2>
//       </div>
//     )
//   }
// }


// import React from "react";

// export default class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       count:0,
//       sum:0
//     }
//   }

//   decrement(){
//     this.setState({count:this.state.count-1})
//   }

//   componentDidMount(){
//     console.log("component created")
//   }
//   componentDidUpdate(){
//     console.log("component updated")
//   }
//   render(){
//     return (
//       <div>
//         <h2>hey</h2>
//         <button onClick={()=>this.setState({count:this.state.count+1})} >INC</button>
//         <h3>Count:{this.state.count}</h3>
//         <button onClick={this.decrement.bind(this)} >DEC</button>
//       </div>
//     )
//   }
// }



// import React from "react";
// import { Count } from "./components/Count";

// export default class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       count:0,
//       sum:0
//     }
//   }

//   decrement(){
//     this.setState({count:this.state.count-1})
//   }

//   componentDidMount(){
//     console.log("component created")
//   }
//   render(){
//     return (
//       <div>
//         <h2>hey</h2>
//         <button onClick={()=>this.setState({count:this.state.count+1})} >INC</button>
//         <Count count={this.state.count} />
//         <button onClick={this.decrement.bind(this)} >DEC</button>
//       </div>
//     )
//   }
// }

import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App
