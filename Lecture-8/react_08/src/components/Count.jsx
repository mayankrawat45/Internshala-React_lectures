import React from "react";

export class Count extends React.Component{

    componentDidUpdate(prevProp,prevState){
        if(this.props.count!==prevProp.count){
            console.log("componenent updated")
        }
    }

    render(){
        return (
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}