// function Golden(){
//     return <h1>Golden Retriever</h1>
// }

// function Dog(){
//     return <h2>Dog</h2>
// }

// function Pitbull(){
//     return <h1>Pitbull</h1>
// }

// export default Golden;
// export {Dog,Pitbull}


function golden(){
    return <h1>Golden Retriever</h1>
}

function Dog(){
    return <h2>Dog</h2>
}

function Pitbull(){
    return <h1>Pitbull</h1>
}
// Here we are exporting with lowerCase but we will catch it in import with UpperCase
export default golden; 
export {Dog,Pitbull}