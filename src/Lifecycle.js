import React from 'react';

class Lifecycle extends React.Component{
    constructor(props){
        super(props)
            this.state={
                count:0
            }
            console.log("LifeCycle Constructor");
    }

    static getDerivedStateFromProps(state,props){
        console.log("Lifecycle getderived state from props method")
        return(null)
    }

    shouldComponentUpdate(){
        console.log("Lifecycle Shouldcomponentupdate");
        // return true
        return false
    }

    getSnapshotBeforeUpdate(){
        console.log("Lifecycle Getsnapshotbeforeupdate");
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle componentdidupdate");
    }

    componentDidMount(){
        console.log("Lifecycle Componentdidmount method");
    }

    render(){
        console.log("Lifecycle Render Method");
        return(
            <div>
                <h1>Life Cycle</h1>
                <p>{this.state.count}</p>
                <button onClick={()=>this.setState({count:1})}>click</button>
            </div>
        )
    }
}
export default Lifecycle;