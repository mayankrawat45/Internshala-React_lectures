
// const Person = (props) => {
//     console.log(props) //always an object
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h2>Age:{props.age}</h2>
//       <h2>Class:{props.course}</h2>
//     </div>
//   )
// }

// export default Person


const Person=({name,age,course})=>{
    return(
        <div>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>Class:{course}</h2>
        </div>
    )
}

export default Person;