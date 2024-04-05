import React from "react";

class Classstate extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleChange1=()=>{
        this.setState({count:this.state.count +1})
    }
    handleChange2=()=>{
        this.setState({count:this.state.count<=0? this.state.count=0 :this.state.count -1})
    }
    render(){
        return(
            <div>
                <h1>Class state</h1>
                <p>Count value: {this.state.count}</p>
                <button onClick={this.handleChange1}>Increment</button>
                <button onClick={this.handleChange2}>Decrement</button>               
            </div>
        )
    }
}

export default Classstate;